const baseUrl = "localhost:3001"

export default store => next => async (action) => {
  if (action.url) {

    await fetch(`${baseUrl}${action.url}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.data)
    })
      .then(res => res.json())
      .then(res => {
        store.dispatch({
          ...action,
          type: action.type + '_SUCCESS',
          res
        })
        delete action.url;
      })
      .catch((err) => console.log(err))
  }

  next(action)
}
