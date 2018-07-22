import React from 'react';
import {Grid, InputGroup, Col, Row, Image, FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap';
import './index.css';
import earth from './earth.svg';
import mars from './mars.svg';
import space from './space.jpg';
import moon from './moon.svg';
import rocket from './space_rocket.svg';
import uranus from './uranus.svg';
import logo from './logo.svg';
import textBox from './text_box.png';

export default class WrongURL extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  componentDidMount(){
    /*깃 허브 404 페이지를 참조.*/
    !function(t){
      function n(t){
        var n=[0,0,0],r=t.css("-webkit-transform")||t.css("-moz-transform")||t.css("-ms-transform")||t.css("-o-transform")||t.css("transform");
        if("none"!==r){//r은 transform 속성값.
          var e=r.split("(")[1].split(")")[0].split(","),o=0,a=0,i=0;//e는 r 문자열에서 괄호 안쪽의 문자들을 ,로 구분하여 만든 배열.
          16==e.length?(o=parseFloat(e[e.length-4]/*e[13]*/),a=parseFloat(e[e.length-3]/*e[14]*/),i=parseFloat(e[e.length-2/*e[15]*/])):(o=parseFloat(e[e.length-2]),a=parseFloat(e[e.length-1]),i=0),n=[o,a,i]
        }
        return n;
      }
      function r(t){
        if(0===t.offsetWidth||0===t.offsetHeight)
          return!1;
        for(var n=document.documentElement.clientHeight,r=t.getClientRects(),e=0,o=r.length;o>e;e++){
          var a=r[e],i=a.top>0?a.top<=n:a.bottom>0&&a.bottom<=n;
          if(i)return!0
        }
        return!1
      }
      function e(){
        return v===!0?!1:void 0!==window.DeviceOrientationEvent
      }
      function o(t){
        var n=t.gamma,r=t.beta;
        if(90===Math.abs(window.orientation)){
          var e=n;n=r,r=e
        }
        return window.orientation<0&&(n=-n,r=-r),p=null===p?n:p,u=null===u?r:u,{x:n-p,y:r-u}}
      function a(t){
        if(!((new Date).getTime()<f+s)){
          f=(new Date).getTime();
          var n=0,a=0,i=t.pageX-n,p=t.pageY-a;
          if(r(g[0].obj.get(0).parentNode)){
            if(e()){
              if(void 0===t.gamma)
                return void(v=!0);
              var u=o(t);
              i=u.x/l,p=u.y/l,i=c>i?c:i>m?m:i,p=c>p?c:p>m?m:p,i=(i+1)/2,p=(p+1)/2
            }
            var h,b,y,w,x,R=document.body.getBoundingClientRect(),F=i/(e()===!0?m:R.width),S=p/(e()===!0?m:R.height);
            for(b=g.length;b--;)h=g[b],d&&!h.background?(y=h.transformStartX+h.inversionFactor*(h.xRange*F),w=h.transformStartY+h.inversionFactor*(h.yRange*S),x=h.transformStartZ,h.obj.css({
              transform:"translate3d("+y+"px,"+w+"px,"+x+"px)"
            })):(y=h.startX+h.inversionFactor*(h.xRange*F),w=h.startY+h.inversionFactor*(h.yRange*S),h.background?h.obj.css({
              "background-position":y+"px "+w+"px"
            }):h.obj.css({
              left:y,top:w
            }))
          }
        }
      }
      var i=25,s=1/i*1e3,f=(new Date).getTime(),g=[],l=30,m=1,c=-1,p=null,u=null,v=!1;
      t.plaxify=function(t,r){
        return function(){
          var e=-1;
          r.xRange=r.xRange?parseInt(r.xRange):0,r.yRange=r.yRange?parseInt(r.yRange):0,r.zRange=r.zRange?parseInt(r.zRange):0;for(var o=0;o<g.length;o++)this===g[o].obj.get(0)&&(e=o);
          if(r.inversionFactor=r.invert?-1:1,r.obj={
            get:function(){
              return t
            },
            css:function(n){
              if("string"==typeof n){
                var r=n.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""});
                return t.style[r]||getComputedStyle(t,"").getPropertyValue(n)
              }
              var e="";
              for(var o in n){
                var a=n[o];a||0===a?e+=o+":"+a+";":t.style.removeProperty(n)
              }
              t.style.cssText+=";"+e
            },
            position:function(){
              var n=t.getBoundingClientRect(),r=t.offsetParent?t.offsetParent.getBoundingClientRect():{top:0,left:0};
              return{
                left:n.left-r.left+window.pageXOffset,
                top:n.top-r.top+window.pageYOffset
              }
            }
          },!r.background){
            var a=r.obj.position(),i=n(r.obj);
            r.obj.css({
              transform:i.join()+"px",top:a.top+"px",left:a.left+"px",right:"",bottom:""
            }),
            r.originX=r.startX=a.left,
            r.originY=r.startY=a.top,
            r.transformOriginX=r.transformStartX=i[0],
            r.transformOriginY=r.transformStartY=i[1],
            r.transformOriginZ=r.transformStartZ=i[2]
          }
          r.startX-=r.inversionFactor*Math.floor(r.xRange/2),
          r.startY-=r.inversionFactor*Math.floor(r.yRange/2),
          r.transformStartX-=r.inversionFactor*Math.floor(r.xRange/2),
          r.transformStartY-=r.inversionFactor*Math.floor(r.yRange/2),
          r.transformStartZ-=r.inversionFactor*Math.floor(r.zRange/2),
          e>=0?g.splice(e,1,r):g.push(r)}()
        };
        var d=function(){
          var t,n=document.createElement("p"),r={
            webkitTransform:"-webkit-transform",
            OTransform:"-o-transform",
            msTransform:"-ms-transform",
            MozTransform:"-moz-transform",
            transform:"transform"};
          document.body.insertBefore(n,null);
          for(var e in r){
            void 0!==n.style[e]&&(n.style[e]="translate3d(1px,1px,1px)",t=window.getComputedStyle(n).getPropertyValue(r[e]));//void연산자 언제나 undefind를 출력
          }
          return document.body.removeChild(n),void 0!==t&&t.length>0&&"none"!==t
        }();
        document.body.addEventListener("mousemove",a),e()&&(window.ondeviceorientation=a)
    }(window);
    var layers = document.querySelectorAll('.js-plaxify')

    for (var layer, i = 0; layer = layers[i]; i++) {
      window.plaxify(layer, {
        xRange: layer.getAttribute('data-xrange'),
        yRange: layer.getAttribute('data-yrange'),
        invert: layer.getAttribute('data-invert') === 'true'
      })
    }
  }

  /*
  //plax 라이브러리에 사용됨.
  xRange : 좌우 움직임 범위.
  yRange : 상하 움직임 범위.
  invert: 마우스 반대로 움직임.
  data prefix: custom attribute를 뜻한다.
  */
  render(){
    return (
      <React.Fragment>
        <div id="parallax_wrapper">
          <div id="parallax_field">
            <img art className="js-plaxify" data-invert="true" data-xrange="0" data-yrange="20" height="415" id="parallax_bg" width="940" src={space}/>
          </div>
          <div id="parallax_illustration">
            <img alt="" className="js-plaxify" data-xrange="200" data-yrange="10" height="249" id="parallax_mars" width="249" src={mars}/>
            <img alt="" className="js-plaxify" data-xrange="10" data-yrange="10" height="140" id="parallax_rocket" width="140" src={rocket}/>
            <img alt="" className="js-plaxify" data-xrange="30" data-yrange="10" height="180" id="parallax_uranus" width="180" src={uranus}/>
            <img alt="" className="js-plaxify" data-invert="true" data-xrange="50" data-yrange="20" height="100" id="parallax_earth" width="100" src={earth}/>
            <img alt="" className="js-plaxify" data-invert="true" data-xrange="150" data-yrange="30" height="50" id="parallax_moon" width="50" src={moon}/>
            <img alt="" className="js-plaxify" data-xrange="10" data-yrange="10" height="80" width="320" id="parallax_text" src={textBox}/>
          </div>
        </div>
        <Grid>
          <Row id="content-top">
          </Row>
          <Row>
            <Col xs={8} xsOffset={2}>
            <form>
              <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <ControlLabel>템플릿을 검색하세요</ControlLabel>
                <InputGroup>
                  <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange}/>
                  <FormControl.Feedback />
                  <InputGroup.Button>
                    <Button type="submit">Submit</Button>
                  </InputGroup.Button>
                </InputGroup>
                <HelpBlock>문자열의 길이를 검사합니다.</HelpBlock>
              </FormGroup>
            </form>
            </Col>
          </Row>
          <Row>
            <Col xs={4} xsOffset={4} sm={2} smOffset={5}>
              <a href="/"><Image src={logo} responsive/></a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <hr/>
              <h4>시차(Parallax) 효과</h4>
              <p>페이지 상단 부분은 마우스를 움직이면 안의 요소들이 함께 움직이며 시차를 표현합니다.</p>
              <p className="opensource_library">오픈소스 라이브러리 :
                <a href="https://github.com/cameronmcefee/plax">
                  https://github.com/cameronmcefee/plax
                </a>
                &nbsp;(MIT License)
              </p>
            </Col>
          </Row>
          <Row id="content-bottom">
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}
