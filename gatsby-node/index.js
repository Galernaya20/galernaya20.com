//@flow

exports.createPages = async (gatsby /*:any*/) => {
  await require('./contacts')(gatsby)
  await require('./training')(gatsby)
  await require('./team')(gatsby)
  await require('./main')(gatsby)
  await require('./school')(gatsby)
  await require('./production')(gatsby)
  await require('./inthebox')(gatsby)
  await require('./equipment')(gatsby)
  await require('./studioA')(gatsby)

  return Promise.resolve()
}
