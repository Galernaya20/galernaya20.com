//@flow

exports.createPages = async (gatsby /*:any*/) => {
  await require('./main')(gatsby)
  await require('./arrangement')(gatsby)
  await require('./bitmaking')(gatsby)
  await require('./instruments')(gatsby)
  await require('./mastering')(gatsby)
  await require('./mounting')(gatsby)
  await require('./recordingReduction')(gatsby)
  await require('./vocal')(gatsby)
  await require('./contacts')(gatsby)
  await require('./training')(gatsby)
  await require('./team')(gatsby)
  await require('./school')(gatsby)
  await require('./production')(gatsby)
  await require('./inthebox')(gatsby)
  await require('./equipment')(gatsby)
  await require('./studioA')(gatsby)
  await require('./prices')(gatsby)

  return Promise.resolve()
}
