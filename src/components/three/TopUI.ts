import * as THREE from "three";
import fragmentSourceGround from "./shader/ground.frag";
import vertexSourceGround from "./shader/ground.vert";
import fragmentSourceSky from "./shader/sky.frag";
import vertexSourceSky from "./shader/sky.vert";
interface Area {
  width: number;
  height: number;
}
interface Props {
  canvas: Element;
}
// three.jsの処理を書いていく
export default class TopUI {
  private canvas: Element;
  private scene: THREE.Scene;
  private area: Area;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private startTime: number;
  private uniforms: {
    iTime: { value: number };
  };
  private box: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]>;
  private tris: {
    obj: THREE.Mesh<THREE.TetrahedronGeometry, THREE.MeshBasicMaterial>;
    move: {
      x: number;
      y: number;
      z: number;
    };
  }[];

  constructor(props: Props) {
    this.canvas = props.canvas;
    this.area = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.startTime = new Date().getTime();
    window.addEventListener("resize", this.onResize.bind(this));
    this.renderer = new THREE.WebGLRenderer({
      canvas: props.canvas,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.area.width, this.area.height);

    // シーンを作成
    this.scene = new THREE.Scene();
    // const axes = new THREE.AxesHelper(1000)
    // this.scene.add(axes)

    // add light
    const light = new THREE.AmbientLight(0xffffff, 1.0);
    this.scene.add(light);

    // カメラを作成
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.area.width / this.area.height,
      10,
      10000
    );
    // test
    // this.camera.position.set(100, -1000, +700)
    this.camera.position.set(0, -1000, +700);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // sky
    const skyGeometry = new THREE.PlaneGeometry(10000, 10000);
    const skyMat = new THREE.ShaderMaterial({
      vertexShader: vertexSourceSky,
      fragmentShader: fragmentSourceSky,
      side: THREE.DoubleSide,
    });
    const skyObj = new THREE.Mesh(skyGeometry, skyMat);
    skyObj.position.set(0, 2000, -1000);
    skyObj.rotation.set(Math.PI / 2, 0, 0);
    this.scene.add(skyObj);

    // ground
    // const groundgeometry = new THREE.PlaneGeometry(10000, 10000);
    this.uniforms = {
      iTime: { value: this.startTime },
    };
    // const groundMat = new THREE.ShaderMaterial({
    //   uniforms: this.uniforms,
    //   vertexShader: vertexSourceGround,
    //   fragmentShader: fragmentSourceGround,
    // });
    // const groundObj = new THREE.Mesh(groundgeometry, groundMat);
    // groundObj.position.set(0, 0, -1000);
    // this.scene.add(groundObj);
    // 箱を作成
    // const geometry = new THREE.BoxGeometry(40, 40, 40);
    // const material = new THREE.MeshNormalMaterial();
    //   const boxmaterials = [
    //     new THREE.MeshBasicMaterial({color: 0x00ff00}),
    //     new THREE.MeshBasicMaterial({color: 0x00ff00}),
    //     new THREE.MeshBasicMaterial({color: 0x0000ff}),
    //     new THREE.MeshBasicMaterial({color: 0x0000ff}),
    //     new THREE.MeshBasicMaterial({color: 0xff0000}),
    //     new THREE.MeshBasicMaterial({color: 0xff0000})
    // ];

    // this.box = new THREE.Mesh(geometry, boxmaterials);
    // this.box.position.set(0, -0, 40);
    // this.scene.add(this.box);
    this.tris = Array(50);
    this.makeTri();

    this.render();
  }

  private makeTri() {
    // const material = new THREE.MeshNormalMaterial();
    const MAX = 1000;
    const MAXROT = 2 * Math.PI;
    const MAXMOVE = 0.3;
    const num = 100;
    for (let i = 0; i < num; i++) {
      const rand = Math.random();
      const color1 = 0xa1c4fd;
      const r1 = (color1 >> 16) & 0xff;
      const g1 = (color1 >> 8) & 0xff;
      const b1 = color1 & 0xff;
      const color2 = 0xc2e9fb;
      const r2 = (color2 >> 16) & 0xff;
      const g2 = (color2 >> 8) & 0xff;
      const b2 = color2 & 0xff;
      const r = Math.floor((r2 - r1) * rand + r1);
      const g = Math.floor((g2 - g1) * rand + g1);
      const b = Math.floor((b2 - b1) * rand + b1);
      const color = (r << 16) | (g << 8) | b;
      const material = new THREE.MeshBasicMaterial({ color });
      const geometry = new THREE.TetrahedronGeometry(Math.random() * 30);
      const tri = new THREE.Mesh(geometry, material);
      const x = Math.random() * MAX * 2 - MAX;
      const y = Math.random() * MAX * 2 - MAX;
      const z = Math.random() * MAX * 2 - MAX;
      tri.position.set(x, y, z);
      const rotx = Math.random() * MAXROT;
      const roty = Math.random() * MAXROT;
      const rotz = Math.random() * MAXROT;
      tri.rotation.set(rotx, roty, rotz);
      const move = {
        x: Math.random() * MAXMOVE,
        y: Math.random() * MAXMOVE,
        z: Math.random() * MAXMOVE,
      };
      this.tris[i] = { obj: tri, move };
    }

    const tris = this.tris.map((tri) => tri.obj);
    this.scene.add(...tris);
  }

  private moveTri() {
    const maxx = 3000;
    const maxy = 3000;
    for (let i = 0; i < this.tris.length; i++) {
      const { x, y, z } = this.tris[i].obj.position;
      const move = this.tris[i].move;

      const newx = x < maxx ? x + move.x : -maxx;
      const newy = y < maxy ? y + move.y : -maxy;
      this.tris[i].obj.position.set(newx, newy, z);

      this.tris[i].obj.rotateX(move.x / 100);
      this.tris[i].obj.rotateY(move.y / 100);
      this.tris[i].obj.rotateZ(move.z / 100);
    }
  }

  private render() {
    this.uniforms.iTime.value = new Date().getTime() - this.startTime;
    // this.box.rotateX(0.01);
    // this.box.rotateY(0.02);
    this.moveTri();
    this.renderer.render(this.scene, this.camera); // レンダリング
    requestAnimationFrame(this.render.bind(this));
  }

  onResize() {
    this.area = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    // サイズを取得
    const width = this.area.width;
    const height = this.area.height;

    // レンダラーのサイズを調整する
    this.renderer.setSize(width, height);

    // カメラのアスペクト比を正す
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  onChange(direction: string) {
    switch (direction) {
      case "left":
        this.scene.position.set(-4, 0, 0);
        this.camera.lookAt(this.scene.position);
        break;
      case "right":
        this.scene.position.set(4, 0, 0);
        this.camera.lookAt(this.scene.position);
        break;
    }
  }
}
