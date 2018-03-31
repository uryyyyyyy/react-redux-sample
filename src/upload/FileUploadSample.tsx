import * as React from 'react'
import { FileUploadState } from './module'
import { ActionDispatcher } from './Container'

interface Props {
  value: FileUploadState
  actions: ActionDispatcher
}

export function FileUploadSample(props: Props) {
  const handleChangeFile = (e: any) => {
    const target: HTMLInputElement = e.target as HTMLInputElement
    if (target.files == null) {
      props.actions.updateFile(null)
    } else {
      const _file = target.files.item(0)
      props.actions.updateFile(_file)
    }
  }
  const file = props.value.file
  const button = file ? <button onClick={() => props.actions.upload(file)}>upload</button> : null
  return (
    <div>
      <h2>File upload</h2>
      <input type="file" name="myFile" onChange={(e) => handleChangeFile(e)} />
      {button}
    </div>
  )
}
