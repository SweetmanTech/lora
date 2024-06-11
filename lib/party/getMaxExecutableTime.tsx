const getMaxExecutableTime = () => {
  const currentDate = new Date()
  const oneMonthLater = new Date(
    currentDate.setMonth(currentDate.getMonth() + 1)
  )
  const maxExecutableTime = Math.floor(oneMonthLater.getTime() / 1000)
  return maxExecutableTime
}

export default getMaxExecutableTime
