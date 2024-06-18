codioIDE.files.onChange((path, content) => {
  console.log('codioIDE.files.onChange', {path, content})
})
codioIDE.guides.onCommandExecute((command) => {
  console.log('codioIDE.guides.onCommandExecute', {command})
})
codioIDE.guides.onCommandResult((command, output, err, format) => {
  console.log('codioIDE.guides.onCommandResult', {command, output, err, format})
})
codioIDE.guides.assessments.onExecute((assessmentId) => {
  console.log('codioIDE.guides.assessments.onExecute', {assessmentId})
})
codioIDE.guides.assessments.onResult((assessmentId, {output, points, result, attempt}) => {
  console.log('codioIDE.guides.assessments.onResult', {assessmentId, output, points, result, attempt})
})
codioIDE.onErrorState((isError, error) => {
  console.log('codioIDE.onErrorState', {isError, error})
})
