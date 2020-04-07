import React from 'react';
//import Vue from 'vue';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>图书馆</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>美术馆</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>音乐厅</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>生活馆</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: {
    className: 'banner0' ,
  },
  textWrapper: { className: 'banner0-text-wrapper' },
  bgvideo:{
    className:'bg-video',
    children:(
        // eslint-disable-next-line react/style-prop-object
        <video src='http://www.tencent.com/video/index-video.mp4' style={{width:1500+'px',height:600+'px',margin:0+'px',overflow:'hidden'}} autoPlay='true' loop/>
    ),
  },
  title: {
    className: 'banner0-title k8phjewafig-editor_css',
    children: (
      <span>
        <span>
          <span>
            <h2>
              <b>See your Dream</b>
            </h2>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>see your dreams in voice</p>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        className: 'title-h1',
        children: '图书馆',
      },
        {
            name:'content',
            children:'这里的有声书与众不同，它们透过耳朵提供一套剧场化的阅读；引导你读懂那些平常只可远观的巨著',
        }
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Teams20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '美术馆',
        classname:'title-h1'
      },
        {
          name:'content',
          children:'中国山水、中古教堂壁画还有希腊雕像；打破阻挡你的墙'
        },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3110020397,1183629603&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=1b41602569fba8bfd21062775c5eb4c5'
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '徐悲鸿' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '艺术巨匠 美术教育家',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '由于他在绘画理论和实践上的卓越成就以及他在美术教育方面所做的巨大贡献，他被国际评论誉为“中国近代绘画之父”',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3550259133,2919355623&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=3603984ba12ebe7d2db258cb837d633d',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '张大千' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '中国泼墨画家 书法家',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '20 世纪50年代，张大千游历世界，获得巨大的国际声誉，被西方艺坛赞为“东方之笔”',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2320941054,1369290666&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=703947764a5c92d97be9f67b17cdb21d',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '齐白石' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '近现代中国绘画大师 世界文化名人',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '擅画花鸟、虫鱼、山水、人物，笔墨雄浑滋润，色彩浓艳明快，造型简练生动，意境淳厚朴实。所作鱼虾虫蟹，天趣横生',
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=261063735,2104496993&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=46d7a52ccf0027d736efd4f82aee7f41',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '吴昌硕' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '“后海派”代表 清末海派四大家',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '他集“诗、书、画、印”为一身，融金石书画为一炉，被誉为“石鼓篆书第一人”、“文人画最后的高峰”。在绘画、书法、篆刻上都是旗帜性人物',
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2069877202,2441417297&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=ea3efe550643b267c74c6fe4114cdb9e',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '黄胄' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '中国画艺术大师，社会活动家，收藏家',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '中国第一座大型民办艺术馆——炎黄艺术馆缔造者；中国画研究院、中国工艺美术馆筹建者；黄胄美术基金会设立者；黄胄独创性地将速写融入中国画，开启全新的人物画笔墨范式，拓展了中国画艺术语言',
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=4237633178,3265010326&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=3ecad4db7a758c4854413983add38470',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '李可染' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '近代杰出的画家、诗人，齐白石的弟子',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '自幼即喜绘画，13岁时学画山水。43岁任中央美术学院教授，49岁为变革山水画，行程数万里旅行写生。72岁任中国美术家协会副主席、中国画研究院院长。晚年用笔趋于老辣。擅长画山水、人物、牛',
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=786927801,2822649466&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=a92c756dd1d9ebe8806de18351e26431',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '潘天寿' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '现代画家 教育家',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '受教于经亨颐、李叔同等人。其写意花鸟初学吴昌硕，后取法石涛、八大，曾任中国美术家协会副主席、浙江美术学院院长等职',
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=682993410,1637126598&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=0e1f572287073b2b6862fc9a9d585aec',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '林风眠' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '画家 艺术教育家 国立艺术院院长',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '自幼喜爱绘画，历任国立北平艺术专科学校校长、国立艺术学院 院长、中国美术家协会上海分会副主席',
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=4202186067,1859951425&fm=74&app=80&f=JPEG&size=f121,140?sec=1880279984&t=52671b06535a1aac9c911263335b0ed2',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '李苦禅' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '书画家 美术教育家 近现代大写意花鸟画宗师',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '1923年拜齐白石为师。曾任杭州艺专教授，中央美术学院教授，中国美术家协会理事，中国画研究院院务委员。擅画花鸟和鹰，晚年常作巨幅通屏',
            },
          ],
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '音乐厅',
        className: 'title-h1',
      },
      { name: 'content', children: '让你听到真正的古典、民谣、摇滚和爵士等不同风格的音乐背后的故事和时代' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'PHONE', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'TABLET' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'DESKTOP', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: '生活馆',
        className: 'title-h1',
      },
        {
            name:'content',
            children:'饮食也好，服装也罢，生活一切皆有学问；轻松愉快地做个讲究的人',
        },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '开幕致辞' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2020 SeeDream All Rights Reserved</span>
      </span>
    ),
  },
};
