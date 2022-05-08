import * as THREE from 'three'
import fragmentSourceGround from '../shader/ground.frag'
import vertexSourceGround from '../shader/ground.vert'
import fragmentSourceSky from '../shader/sky.frag'
import vertexSourceSky from '../shader/sky.vert'
import EventBus from '~/utils/eventBus'
interface Area {
  width: number
  height: number
}
interface Props {
  $canvas: Element
  area: Area
}
// three.jsの処理を書いていく
export default class ArtworkGL {
  private canvas: Element
  private scene: THREE.Scene
  private area: Area
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private box: THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>
  private tris: {
    obj: THREE.Mesh<THREE.TetrahedronGeometry, THREE.MeshNormalMaterial>
    move: {
      x: number
      y: number
      z: number
    }
  }[]

  constructor(props: Props) {
    this.canvas = props.$canvas
    this.area = props.area
    this.renderer = new THREE.WebGLRenderer({
      canvas: props.$canvas,
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.area.width, this.area.height)

    // シーンを作成
    this.scene = new THREE.Scene()
    // const axes = new THREE.AxesHelper(1000)
    // this.scene.add(axes)
    // add light
    const light = new THREE.AmbientLight(0xffffff, 1.0)
    this.scene.add(light)

    // カメラを作成
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.area.width / this.area.height,
      10,
      10000
    )
    // test
    // this.camera.position.set(100, -1000, +700)
    this.camera.position.set(0, -1000, +700)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    // 箱を作成
    const geometry = new THREE.BoxGeometry(40, 40, 40)
    const material = new THREE.MeshNormalMaterial()

    // ground
    const groundgeometry = new THREE.PlaneGeometry(10000, 10000)
    const groundMat = new THREE.ShaderMaterial({
      vertexShader: vertexSourceGround,
      fragmentShader: fragmentSourceGround,
    })
    const groundObj = new THREE.Mesh(groundgeometry, groundMat)
    groundObj.position.set(0, 0, -1000)
    this.scene.add(groundObj)

    // sky
    const skyGeometry = new THREE.PlaneGeometry(10000, 10000)
    const skyMat = new THREE.ShaderMaterial({
      vertexShader: vertexSourceSky,
      fragmentShader: fragmentSourceSky,
      side: THREE.DoubleSide,
    })
    const skyObj = new THREE.Mesh(skyGeometry, skyMat)
    skyObj.position.set(0, 2000, 0)
    skyObj.rotation.set(Math.PI / 2, 0, 0)
    this.scene.add(skyObj)

    this.box = new THREE.Mesh(geometry, material)
    this.box.position.set(0, -0, 40)
    this.scene.add(this.box)
    this.tris = Array(50)
    this.makeTri()

    this.render()

    // 毎フレーム時に実行されるループイベントです
    EventBus.$on('CHANGE_CAMERA', this.onChange.bind(this))
    EventBus.$on('WINDOW_RESIZE', this.onResize.bind(this))
  }

  private makeTri() {
    const material = new THREE.MeshNormalMaterial()
    const MAX = 1000
    const MAXROT = 2 * Math.PI
    const MAXMOVE = 0.3
    const num = 100
    for (let i = 0; i < num; i++) {
      const geometry = new THREE.TetrahedronGeometry(Math.random() * 30)
      const tri = new THREE.Mesh(geometry, material)
      const x = Math.random() * MAX * 2 - MAX
      const y = Math.random() * MAX * 2 - MAX
      const z = Math.random() * MAX * 2 - MAX
      tri.position.set(x, y, z)
      const rotx = Math.random() * MAXROT
      const roty = Math.random() * MAXROT
      const rotz = Math.random() * MAXROT
      tri.rotation.set(rotx, roty, rotz)
      const move = {
        x: Math.random() * MAXMOVE,
        y: Math.random() * MAXMOVE,
        z: Math.random() * MAXMOVE,
      }
      this.tris[i] = { obj: tri, move }
    }

    const tris = this.tris.map((tri) => tri.obj)
    this.scene.add(...tris)
  }

  private moveTri() {
    const maxx = 3000
    const maxy = 3000
    for (let i = 0; i < this.tris.length; i++) {
      const { x, y, z } = this.tris[i].obj.position
      const move = this.tris[i].move

      const newx = x < maxx ? x + move.x : -maxx
      const newy = y < maxy ? y + move.y : -maxy
      this.tris[i].obj.position.set(newx, newy, z)

      this.tris[i].obj.rotateX(move.x / 100)
      this.tris[i].obj.rotateY(move.y / 100)
      this.tris[i].obj.rotateZ(move.z / 100)
    }
  }

  private render() {
    this.box.rotateX(0.01)
    this.box.rotateY(0.02)
    this.moveTri()
    this.renderer.render(this.scene, this.camera) // レンダリング
    requestAnimationFrame(this.render.bind(this))
  }

  onResize(area: Area) {
    // サイズを取得
    const width = area.width
    const height = area.height

    // レンダラーのサイズを調整する
    this.renderer.setSize(width, height)

    // カメラのアスペクト比を正す
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  onChange(direction: string) {
    switch (direction) {
      case 'left':
        this.scene.position.set(-4, 0, 0)
        this.camera.lookAt(this.scene.position)
        break
      case 'right':
        this.scene.position.set(4, 0, 0)
        this.camera.lookAt(this.scene.position)
        break
    }
  }
}
