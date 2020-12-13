const setData = (req, res, next) => {
  const data = req.body
  const newData = {}
  console.log(data)
  if(data.cityOrZipcode === '' || data.cityOrZipcode === ' ' ){
    res
      .status(400)
      .json({ errorType: 3, msg: "A city is required!" })
  }
  const convertToInt = (data) => {
    data.trim()
    let removeDollar = data.replace("$", "")
    let removeComma = removeDollar.replace(",", "")
    let converted = parseInt(removeComma)
    if (isNaN(converted)) {
      return ""
    }
    return converted
  }

  for (key in data) {
    newData[key] = data[key].toString().toLowerCase().trim()
    if (
      key !== "cityOrZipcode" &&
      key !== "propertyType" &&
      key !== "cs_error"
    ) {
      newData[key] = convertToInt(data[key])
    }
  }
  // check if Min price is greater than max price
  if (newData.minPrice > newData.maxPrice) {
    res
      .status(400)
      .json({ errorType: 1, msg: "MIN.price should be smaller than Max.price" })
  }
  req.data = newData
  next()
}

module.exports = setData
