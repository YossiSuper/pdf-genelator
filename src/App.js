import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <div>
        <h2 class="display-4 text-center">小テストジェネレーター</h2>
        <p>
          好きなだけテストを生成することができます。英単語などがしっかり覚えられているのかの確認テストに有効活用しましょう。
        </p>
      </div>
      <form>
        <div class="mb-3">
          <label for="template-file" class="form-label">
            テンプレートファイル(.ejs)
          </label>
          <input class="form-control" type="file" id="template-file" />
        </div>
        <div class="mb-3">
          <label for="data-file" class="form-label">
            データファイル(.json)
          </label>
          <input class="form-control" type="file" id="data-file" />
        </div>
        <div class="mb-3">
          <label for="export-path" class="form-label">
            出力先(絶対パス)
          </label>
          <input
            class="form-control form-control-sm"
            type="text"
            id="export-path"
          />
        </div>
        <div class="mb-3">
          <label for="export-path" class="form-label">
            ランダム
          </label>
          <input
            class="form-check-input mt-0"
            type="checkbox"
            value=""
            aria-label="出題はランダムか。"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          生成
        </button>
      </form>
    </div>
  );
}

export default App;
