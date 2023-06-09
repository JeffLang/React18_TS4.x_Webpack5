import { useEffect } from 'react'
import { test } from 'src/utils/base'
import { Icon } from 'src/components'
import jsonTest  from 'src/assets/json/test.json'
import lessStyle from './style.module.less'
import scssStyle from './style.module.scss'

function Index() {
  useEffect(() => {
    test()
    console.log('jsonTest', (jsonTest))
    console.log('123')
  }, [])
  return (
    <>
    <h1>1122</h1>
      <h1 className="noModuleCss">Index</h1>
      <h2>样式测试</h2>
      <div className={lessStyle.lessStyleBox}>less样式测试</div>
      <div className={scssStyle.scssStyleBox}>scss样式测试</div>
      <div>
        <div>img处理测试</div>
        <div>
          <div>
            <img src={require('src/assets/image/1cc35821-7988-410f-88e7-ace8abcc7f38.jpg')} alt="" />
          </div>
          <div>
            <img src={require('src/assets/image/3c5c6aaa3a0be16af90fdf3b9a87487.png')} alt="" />
          </div>
          <div>
            <img src={require('src/assets/image/6ac.jpg')} alt="" />
          </div>
        </div>
      </div>
      <h2>图片引入测试</h2>
      <div>
        <div>背景图片引入测试11</div>
        <div className={lessStyle.bgImgTest}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <h2>iconfont引入测试</h2>
      <div>
        <Icon name="icon-fangzi-copy"/>
      </div>
      <h2>字体引入测试</h2>
      <div className={lessStyle.fontTest}>文字字体测试哈哈哈</div>
    </>
  )
}

export default Index
