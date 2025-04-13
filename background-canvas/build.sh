cargo build --release --target wasm32-unknown-unknown
wasm-bindgen --out-name wasm_test \
  --out-dir wasm/target \
  --target web target/wasm32-unknown-unknown/release/background-canvas.wasm
