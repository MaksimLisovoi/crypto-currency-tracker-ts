 function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

 const reportError = ({message}: {message: string}) => {
  console.error(message)
}

export {getErrorMessage, reportError  }