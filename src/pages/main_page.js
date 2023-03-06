import React,{useState} from 'react'

const Main_page = () => {
  const [mode,setMode]=useState("")
  const [template_path,setTemplate_path]=useState("")
  const [data_path,setData_path]=useState("")
  const [export_path,setExport_path]=useState("")
  return (
    <div>
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
          <input class="form-control" type="file" id="template-file" value={template_path} onChange={(e)=>setTemplate_path(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="data-file" class="form-label">
            データファイル(.json)
          </label>
          <input class="form-control" type="file" id="data-file" value={data_path} onChange={(e)=>setData_path(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="export-path" class="form-label">
            出力先(絶対パス)
          </label>
          <input
            class="form-control form-control-sm"
            type="text"
            id="export-path"
            value={export_path} onChange={(e)=>setExport_path(e.target.value)}
          />
        </div>
        <div class="mb-3">
        <label for="mode-select" class="form-label">モード</label>
          <select class="form-select" aria-label="モード選択" id="mode-select" value={mode} onChange={(e)=>setMode(e.target.value)}>
            <option value="range-mode">出題範囲を指定</option>
            <option value="random-mode">問題数を指定</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          生成
        </button>
      </form>
    </div>
  )
}

export default Main_page