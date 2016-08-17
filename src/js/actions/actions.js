export function weather() {
  return {
    type: 'INC',
    // payload: 1
  }
  // return async (dispatch, getState) => {
  //   const result = await fetch(url)
    
  //   dispatch({
  //     type: 'WEATHER',
  //     payload: result.data
  //   })
  // }
  // return (dispatch, getState) => {
  //   fetch(url).then(result => {
  //     dispatch({
  //       type: 'WEATHER',
  //       payload: result.data
  //     })
  //   }).catch(error => console.log(error));
  // }
}

