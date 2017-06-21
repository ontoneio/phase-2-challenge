function searchNameByCode (code) {
  return data.filter(
    function(data){
      return data.code == code
    }
  )
}
