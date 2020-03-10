import ReduxQuerySync from 'redux-query-sync'

function arrayToString (array) {
  if (array) {
    return array.join('|')
  } else {
    return undefined
  }
}

function stringToArray (csv) {
  if (csv) {
    return csv.split('|')
  } else {
    return []
  }
}

function setupQueryStringSync (store) {
  ReduxQuerySync({
    store,
    params: {
        pin: {
          selector: state => state.ui.pinned,
          action: value => ({ type: 'UI.SET_PINNED_ENTRIES', value }),
          valueToString: arrayToString,
          stringToValue: stringToArray
        },
        exp: {
          selector: state => state.ui.expanded,
          action: value => ({ type: 'UI.SET_EXPANDED_ENTRIES', value }),
          valueToString: arrayToString,
          stringToValue: stringToArray
        },
    },
    replaceState: true,
    initialTruth: 'location'
  })
}

export default setupQueryStringSync