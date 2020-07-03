//1.初始化数据
var keys = {
  '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
  '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
  '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
  'length': 3
}
var hash = {
  'q': 'www.qq.com', 'w': 'www.weibo.com',  'i': 'www.iqiyi.com',  'z': 'zhihu.com',


}
//取出localStorage中的对应的hash 是否为null
var hashInlocalStrage = JSON.parse(localStorage.getItem('newWebsite') || 'null')
console.log(hashInlocalStrage)
if (hashInlocalStrage) {
  hash = hashInlocalStrage
}
//函数
function tag(tagName) {
  return document.createElement(tagName)
}
function createSpan(textContent) {
  var span = tag('span')
  span.textContent = row[index2]
  span.className = 'text'
  return span
}
function createButton(id) {
  var buttonX = tag('button')
  buttonX.textContent = 'Edit'
  buttonX.id = id
  buttonX.onclick = function (cyj) { //bottonX容器 
      var buttonClick = cyj['target'] // <botton id=''>编辑<botton> 被用户点击的按钮
      var key = buttonClick['id'] // q w e r cyj['target']['id'] 就是用户点击的元素
      var img2 = buttonClick.previousSibling.previousSibling
      var x = window.prompt('给我一个网址') //zhihu.com
      hash[key] = x // hash变更
      localStorage.setItem('newWebsite', JSON.stringify(hash))

      img2.src = 'http://' + x + '/favicon.ico'
      img2.onerror = function (ero) {
          ero.target.src = './img/alticon.jpg'
      }
      
  }
  return buttonX
}
function createImg(domain) {
  var imgIcon = tag('img')
  if (domain) {
      imgIcon.src = 'http://' + domain + '/favicon.ico'
  } else {
      imgIcon.src = './img/alticon.jpg'
  }
  imgIcon.onerror = function (ero) {
      ero.target.src = './img/alticon.jpg'
  }
  return imgIcon
}

//2. 生成键盘
// 遍历 keys，生成kbd标签
for (var index = 0; index < keys['length']; index = index + 1) {  //0 1 2
  var divRow = document.createElement('div')
  divRow.className = 'row'
  var keyboard = document.getElementById('keyboard')
  keyboard.appendChild(divRow)

  var row = keys[index] // 第一数组 第二数组 第三数组
  for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
      var kbdSpan = createSpan(row[index2])
      var kbdButton = createButton(row[index2])
      var kbdImg = createImg(hash[row[index2]])

      var theKbd = document.createElement('kbd')
      theKbd.className = 'key'
      theKbd.appendChild(kbdImg)
      theKbd.appendChild(kbdSpan)
      theKbd.appendChild(kbdButton)
      

      divRow.appendChild(theKbd)
  }
}

//3.监听事件
var stringBaidu = 'https://www.baidu.com/s?wd='
var input = document.getElementById('keyword')

document.addEventListener('keypress', function (e) {
  var key = e['key']
  var website = hash[key]
  //location.href = 'http://' + website
  window.open('http://' + website, '_blank')
})

input.addEventListener('keypress', function (e) {
   e.stopPropagation()
  if (e.keyCode == 13) {
      let stringBaidu = 'https://www.baidu.com/s?wd='
      let query = document.getElementById('keyword').value.toString()
      stringBaidu = stringBaidu.concat(query)
      window.open(url = `${stringBaidu}`, target = '_blank')
  }
})
btn.onclick = function (e) {
  let stringBaidu = 'https://www.baidu.com/s?wd='
  let query = document.getElementById('keyword').value.toString()
  stringBaidu = stringBaidu.concat(query)
  window.open(url = `${stringBaidu}`, target = '_blank')
}



