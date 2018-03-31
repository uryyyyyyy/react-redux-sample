import { Action } from 'redux'
import { ReduxAction } from '../store'

enum ActionNames {
  UPDATE_FILE = 'upload/update_file',
  UPLOAD_START = 'upload/fetch_request_start',
  UPLOAD_FINISH = 'upload/fetch_request_finish'
}

interface UpdateFileAction extends Action {
  type: ActionNames.UPDATE_FILE
  appAction: boolean
  file: File | null
}
export const updateFile = (file: File | null): UpdateFileAction => ({
  type: ActionNames.UPDATE_FILE,
  appAction: true,
  file
})

interface UploadStartAction extends Action {
  type: ActionNames.UPLOAD_START
  appAction: boolean
}
export const uploadStart = (): UploadStartAction => ({
  type: ActionNames.UPLOAD_START,
  appAction: true
})

interface UploadFinishAction extends Action {
  type: ActionNames.UPLOAD_FINISH
  appAction: boolean
}
export const uploadFinish = (): UploadFinishAction => ({
  type: ActionNames.UPLOAD_FINISH,
  appAction: true
})

export interface FileUploadState {
  file: File | null
}

export type FileUploadActions = UploadStartAction | UploadFinishAction | UpdateFileAction

const initialState: FileUploadState = {
  file: null
}

export default function reducer(state: FileUploadState = initialState, action: ReduxAction): FileUploadState {
  if (!('appAction' in action)) {
    return state
  }
  switch (action.type) {
    case ActionNames.UPDATE_FILE: {
      return Object.assign({}, state, { file: action.file })
    }
    default:
      return state
  }
}
