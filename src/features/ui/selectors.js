export function getDevices(state) {
  const devices = [
    {id: 1, name: 'ro1', msg: 'mag1'},
    {id: 2, name: 'ro2', msg: 'mag2'},
    {id: 3, name: 'ro3', msg: 'mag3'},
    {id: 4, name: 'ro4', msg: 'mag3'},
    {id: 5, name: 'ro5', msg: 'mag4'},
    {id: 6, name: 'ro6', msg: 'mag3'},
  ]
  return devices
  // return state.mqtt.arrayDevices
}