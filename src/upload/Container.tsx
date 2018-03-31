import { FileUploadSample } from './FileUploadSample'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'
import { Dispatch } from 'redux'
import { FileUploadState, updateFile, uploadFinish, uploadStart } from './module'
import { ReduxAction, ReduxState } from '../store'
import { RouteComponentProps } from 'react-router'

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}

  myHeaders = new Headers({
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })

  public updateFile(file: File | null): void {
    this.dispatch(updateFile(file))
  }

  public async upload(file: File): Promise<void> {
    this.dispatch(uploadStart())
    const formData = new FormData()
    formData.append('myFile', file)
    try {
      const response: Response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: this.myHeaders
      })
      if (response.ok) {
        // 2xx
        const json = await response.json()
        console.log(json)
        alert('upload done')
      } else {
        throw new Error(`illegal status code: ${response.status}`)
      }
    } catch (err) {
      console.error(err)
    } finally {
      this.dispatch(uploadFinish())
    }
  }
}

type RouterProps = RouteComponentProps<{}>

const mapStateToProps: MapStateToPropsParam<{ value: FileUploadState }, RouterProps, ReduxState> = (
  state: ReduxState,
  _: RouterProps
) => {
  return { value: state.upload }
}

const mapDispatchToProps: MapDispatchToPropsParam<{ actions: ActionDispatcher }, {}> = (
  dispatch: Dispatch<ReduxAction>
) => ({ actions: new ActionDispatcher(dispatch) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploadSample)
