import { getter } from "elum-state/react";
import { DATA, Data } from "engine/state/atoms";

const loadData = () => new Promise<Data>((resolve) => {
  setTimeout(() => resolve({
    ...getter(DATA),
    rating: {
      clan: [
        {
          name: "Анонимный Мессенджер",
          image: "https://sun9-74.userapi.com/impg/fqRztNCdjYo4bvce_SnEznV8dGtj7Q_Np1afog/F8VO347qORI.jpg?size=1001x1001&quality=95&sign=921bd225fb93832d38ac9f9bf4791a31&type=album",
          count: 100000000,
          link: "https://vk.com/anonim_messenger"
        }
      ],
      users: {
        hour: [
          {
            first_name: "Алла",
            last_name: "Проценко",
            image: "https://sun2-3.userapi.com/s/v1/if1/OcBLGzNKBpOFFfq8nDstSo-CtEQ3YC3Iq8pZU6foCOS3bizF7Wdll1O7vqcypcdcIhTFL7u3.jpg?size=50x50&quality=96&crop=0,15,1064,1064&ava=1",
            count: 2400,
            link: "https://vk.com/allochka975"
          },
          {
            first_name: "Евгений",
            last_name: "Таранов",
            image: "https://sun2-9.userapi.com/s/v1/ig2/yKCcisFnIBcbi-4wz5Z45TFKAop4HubTz2LaEPfsV3BjC1BMoCT8T4FWgmwfBR3e8kFbDq2PpLKWu95m7WA2q06z.jpg?size=50x50&quality=95&crop=98,27,309,309&ava=1",
            count: 2300,
            link: "https://vk.com/hold_owl"
          },
          {
            first_name: "Эля",
            last_name: "Ангелова",
            image: "https://sun120-1.userapi.com/s/v1/if2/Xf95N84_uT5IaP5qGSnZSfalTif5OgQ6oLpAktt6_59mOec1D9-nSdj6cHHJ4RGsABgFSyJ82Y8c58gyrlCR-Umc.jpg?quality=95&crop=64,15,955,955&as=50x50,100x100,200x200,400x400&ava=1&u=AZoLRL2RcrMR0sj9Xe-uzs9H05lsKIM_W1roYZb4Z4s&cs=200x200",
            count: 2200,
            link: "https://vk.com/elgrz"
          },
          {
            first_name: "Дмитрий",
            last_name: "Задохин",
            image: "https://sun120-1.userapi.com/s/v1/if2/JxETNJw72Huhb4kKPjb_b29nMTA0MpZLLdIaPr9UR-9f-J4yIO_mR11egdU0vXVj0lXm7G5JiBXBChkue3JWHYlM.jpg?quality=95&crop=211,4,1492,1492&as=50x50,100x100,200x200,400x400&ava=1&u=N3dtASo5ApBNkyV4CcId5guPY0rlBfaL85aWtEGw6Go&cs=200x200",
            count: 2100,
            link: "https://vk.com/vkdevrel"
          },
          {
            first_name: "Артем",
            last_name: "Борисов",
            image: "https://sun120-1.userapi.com/s/v1/if2/bJfuKWxu3QFT3HpcVLKLwspzmbh61ogh9-K87LN5_MKpOaXhp9dLiG9Sq4v2mk8LKmVUg6FtuP-vqjT8NsV6cscg.jpg?quality=96&crop=446,84,864,864&as=50x50,100x100,200x200,400x400&ava=1&u=zM4XKBAOfu09LM6Hq9qnfMrjXu0r2zudF-HbovHAf2w&cs=200x200",
            count: 2000,
            link: "https://vk.com/borisovrtem"
          },
          {
            first_name: "Василий",
            last_name: "Жидков",
            image: "https://sun120-2.userapi.com/s/v1/if2/hfYA755NmuagOnE_wPA1qnmPJHWcK37oAzHL6X1f4dUweEq32kFMX6QM3hgeXS6vy19HWZLuvqYLaZmnNaUCoqux.jpg?quality=96&crop=0,444,750,750&as=50x50,100x100,200x200,400x400&ava=1&u=75asHByG3IiNeXajqhd179cjwytrBHo6oDvLvJ4JEfc&cs=200x200",
            count: 1900,
            link: "https://vk.com/i4yma"
          },
          {
            first_name: "Иван",
            last_name: "Расторгуев",
            image: "https://sun120-2.userapi.com/s/v1/if1/hiuHnaYngyJeTiHmGnnLPRjhw0lcWaIpubPlTwuBkVmTCSgQsHBY02O53JO_l0y5B84buwsO.jpg?quality=96&crop=229,36,1076,1076&as=50x50,100x100,200x200,400x400&ava=1&u=7RBw9OeCzh94EJmGWCrdqZTzqMWqmsoHvve6nC6SW04&cs=200x200",
            count: 1800,
            link: "https://vk.com/usd"
          },
          {
            first_name: "Елизавета",
            last_name: "Пластун",
            image: "https://sun120-1.userapi.com/s/v1/if2/P8vGDbdDHD0v2soDetXanPij7wbpkESU84mL49ET0PISDhmw2asmsFDZPMQpILbLum3ys8_uHfhd-gjUJPDS8voq.jpg?quality=95&crop=102,17,1002,1002&as=50x50,100x100,200x200,400x400&ava=1&u=gQylgdn0CA-hqJp18DbNLIlrgo4rROAkkvixr1Q9U94&cs=200x200",
            count: 1700,
            link: "https://vk.com/neprezentabelnaya_glista"
          }
        ],
        day: [
          {
            first_name: "Алла",
            last_name: "Проценко",
            image: "https://sun2-3.userapi.com/s/v1/if1/OcBLGzNKBpOFFfq8nDstSo-CtEQ3YC3Iq8pZU6foCOS3bizF7Wdll1O7vqcypcdcIhTFL7u3.jpg?size=50x50&quality=96&crop=0,15,1064,1064&ava=1",
            count: 2400,
            link: "https://vk.com/allochka975"
          },
          {
            first_name: "Евгений",
            last_name: "Таранов",
            image: "https://sun2-9.userapi.com/s/v1/ig2/yKCcisFnIBcbi-4wz5Z45TFKAop4HubTz2LaEPfsV3BjC1BMoCT8T4FWgmwfBR3e8kFbDq2PpLKWu95m7WA2q06z.jpg?size=50x50&quality=95&crop=98,27,309,309&ava=1",
            count: 2300,
            link: "https://vk.com/hold_owl"
          },
          {
            first_name: "Эля",
            last_name: "Ангелова",
            image: "https://sun120-1.userapi.com/s/v1/if2/Xf95N84_uT5IaP5qGSnZSfalTif5OgQ6oLpAktt6_59mOec1D9-nSdj6cHHJ4RGsABgFSyJ82Y8c58gyrlCR-Umc.jpg?quality=95&crop=64,15,955,955&as=50x50,100x100,200x200,400x400&ava=1&u=AZoLRL2RcrMR0sj9Xe-uzs9H05lsKIM_W1roYZb4Z4s&cs=200x200",
            count: 2200,
            link: "https://vk.com/elgrz"
          },
          {
            first_name: "Дмитрий",
            last_name: "Задохин",
            image: "https://sun120-1.userapi.com/s/v1/if2/JxETNJw72Huhb4kKPjb_b29nMTA0MpZLLdIaPr9UR-9f-J4yIO_mR11egdU0vXVj0lXm7G5JiBXBChkue3JWHYlM.jpg?quality=95&crop=211,4,1492,1492&as=50x50,100x100,200x200,400x400&ava=1&u=N3dtASo5ApBNkyV4CcId5guPY0rlBfaL85aWtEGw6Go&cs=200x200",
            count: 2100,
            link: "https://vk.com/vkdevrel"
          },
          {
            first_name: "Артем",
            last_name: "Борисов",
            image: "https://sun120-1.userapi.com/s/v1/if2/bJfuKWxu3QFT3HpcVLKLwspzmbh61ogh9-K87LN5_MKpOaXhp9dLiG9Sq4v2mk8LKmVUg6FtuP-vqjT8NsV6cscg.jpg?quality=96&crop=446,84,864,864&as=50x50,100x100,200x200,400x400&ava=1&u=zM4XKBAOfu09LM6Hq9qnfMrjXu0r2zudF-HbovHAf2w&cs=200x200",
            count: 2000,
            link: "https://vk.com/borisovrtem"
          },
          {
            first_name: "Василий",
            last_name: "Жидков",
            image: "https://sun120-2.userapi.com/s/v1/if2/hfYA755NmuagOnE_wPA1qnmPJHWcK37oAzHL6X1f4dUweEq32kFMX6QM3hgeXS6vy19HWZLuvqYLaZmnNaUCoqux.jpg?quality=96&crop=0,444,750,750&as=50x50,100x100,200x200,400x400&ava=1&u=75asHByG3IiNeXajqhd179cjwytrBHo6oDvLvJ4JEfc&cs=200x200",
            count: 1900,
            link: "https://vk.com/i4yma"
          },
          {
            first_name: "Иван",
            last_name: "Расторгуев",
            image: "https://sun120-2.userapi.com/s/v1/if1/hiuHnaYngyJeTiHmGnnLPRjhw0lcWaIpubPlTwuBkVmTCSgQsHBY02O53JO_l0y5B84buwsO.jpg?quality=96&crop=229,36,1076,1076&as=50x50,100x100,200x200,400x400&ava=1&u=7RBw9OeCzh94EJmGWCrdqZTzqMWqmsoHvve6nC6SW04&cs=200x200",
            count: 1800,
            link: "https://vk.com/usd"
          },
          {
            first_name: "Елизавета",
            last_name: "Пластун",
            image: "https://sun120-1.userapi.com/s/v1/if2/P8vGDbdDHD0v2soDetXanPij7wbpkESU84mL49ET0PISDhmw2asmsFDZPMQpILbLum3ys8_uHfhd-gjUJPDS8voq.jpg?quality=95&crop=102,17,1002,1002&as=50x50,100x100,200x200,400x400&ava=1&u=gQylgdn0CA-hqJp18DbNLIlrgo4rROAkkvixr1Q9U94&cs=200x200",
            count: 1700,
            link: "https://vk.com/neprezentabelnaya_glista"
          }
        ],
        all: [
          {
            first_name: "Алла",
            last_name: "Проценко",
            image: "https://sun2-3.userapi.com/s/v1/if1/OcBLGzNKBpOFFfq8nDstSo-CtEQ3YC3Iq8pZU6foCOS3bizF7Wdll1O7vqcypcdcIhTFL7u3.jpg?size=50x50&quality=96&crop=0,15,1064,1064&ava=1",
            count: 2400,
            link: "https://vk.com/allochka975"
          },
          {
            first_name: "Евгений",
            last_name: "Таранов",
            image: "https://sun2-9.userapi.com/s/v1/ig2/yKCcisFnIBcbi-4wz5Z45TFKAop4HubTz2LaEPfsV3BjC1BMoCT8T4FWgmwfBR3e8kFbDq2PpLKWu95m7WA2q06z.jpg?size=50x50&quality=95&crop=98,27,309,309&ava=1",
            count: 2300,
            link: "https://vk.com/hold_owl"
          },
          {
            first_name: "Эля",
            last_name: "Ангелова",
            image: "https://sun120-1.userapi.com/s/v1/if2/Xf95N84_uT5IaP5qGSnZSfalTif5OgQ6oLpAktt6_59mOec1D9-nSdj6cHHJ4RGsABgFSyJ82Y8c58gyrlCR-Umc.jpg?quality=95&crop=64,15,955,955&as=50x50,100x100,200x200,400x400&ava=1&u=AZoLRL2RcrMR0sj9Xe-uzs9H05lsKIM_W1roYZb4Z4s&cs=200x200",
            count: 2200,
            link: "https://vk.com/elgrz"
          },
          {
            first_name: "Дмитрий",
            last_name: "Задохин",
            image: "https://sun120-1.userapi.com/s/v1/if2/JxETNJw72Huhb4kKPjb_b29nMTA0MpZLLdIaPr9UR-9f-J4yIO_mR11egdU0vXVj0lXm7G5JiBXBChkue3JWHYlM.jpg?quality=95&crop=211,4,1492,1492&as=50x50,100x100,200x200,400x400&ava=1&u=N3dtASo5ApBNkyV4CcId5guPY0rlBfaL85aWtEGw6Go&cs=200x200",
            count: 2100,
            link: "https://vk.com/vkdevrel"
          },
          {
            first_name: "Артем",
            last_name: "Борисов",
            image: "https://sun120-1.userapi.com/s/v1/if2/bJfuKWxu3QFT3HpcVLKLwspzmbh61ogh9-K87LN5_MKpOaXhp9dLiG9Sq4v2mk8LKmVUg6FtuP-vqjT8NsV6cscg.jpg?quality=96&crop=446,84,864,864&as=50x50,100x100,200x200,400x400&ava=1&u=zM4XKBAOfu09LM6Hq9qnfMrjXu0r2zudF-HbovHAf2w&cs=200x200",
            count: 2000,
            link: "https://vk.com/borisovrtem"
          },
          {
            first_name: "Василий",
            last_name: "Жидков",
            image: "https://sun120-2.userapi.com/s/v1/if2/hfYA755NmuagOnE_wPA1qnmPJHWcK37oAzHL6X1f4dUweEq32kFMX6QM3hgeXS6vy19HWZLuvqYLaZmnNaUCoqux.jpg?quality=96&crop=0,444,750,750&as=50x50,100x100,200x200,400x400&ava=1&u=75asHByG3IiNeXajqhd179cjwytrBHo6oDvLvJ4JEfc&cs=200x200",
            count: 1900,
            link: "https://vk.com/i4yma"
          },
          {
            first_name: "Иван",
            last_name: "Расторгуев",
            image: "https://sun120-2.userapi.com/s/v1/if1/hiuHnaYngyJeTiHmGnnLPRjhw0lcWaIpubPlTwuBkVmTCSgQsHBY02O53JO_l0y5B84buwsO.jpg?quality=96&crop=229,36,1076,1076&as=50x50,100x100,200x200,400x400&ava=1&u=7RBw9OeCzh94EJmGWCrdqZTzqMWqmsoHvve6nC6SW04&cs=200x200",
            count: 1800,
            link: "https://vk.com/usd"
          },
          {
            first_name: "Елизавета",
            last_name: "Пластун",
            image: "https://sun120-1.userapi.com/s/v1/if2/P8vGDbdDHD0v2soDetXanPij7wbpkESU84mL49ET0PISDhmw2asmsFDZPMQpILbLum3ys8_uHfhd-gjUJPDS8voq.jpg?quality=95&crop=102,17,1002,1002&as=50x50,100x100,200x200,400x400&ava=1&u=gQylgdn0CA-hqJp18DbNLIlrgo4rROAkkvixr1Q9U94&cs=200x200",
            count: 1700,
            link: "https://vk.com/neprezentabelnaya_glista"
          }
        ]
      }
    },
    shop: [
      {
        type: "valentines_1",
        heart: 99,
        title: "Маленькая валентинка",
        isOver: false
      },
      {
        type: "valentines_2",
        heart: 88,
        title: "Средняя валентинка",
        isOver: false
      },
      {
        type: "valentines_3",
        heart: 77,
        title: "Большая валентинка",
        isOver: false
      },
      {
        type: "smile_1",
        heart: 77,
        title: "Смайлик к имени 1",
        isOver: false
      },
      {
        type: "smile_2",
        heart: 77,
        title: "Смайлик к имени 2",
        isOver: false
      },
      {
        type: "frame",
        kiss: 77,
        title: "Рамка для профиля",
        isOver: false
      },
    ],
    improve: [
      {
        type: "auto_mining",
        kiss: 999,
        title: "Авто-майнинг сердец",
        isOver: false
      },
      {
        type: "level_click",
        kiss: 999,
        title: "Уровень клика",
        isOver: false
      }
    ]
  }))
})

export default loadData;
