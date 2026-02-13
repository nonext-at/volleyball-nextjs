import { Page, Tournament, Clinic, Coach, LeaderboardEntry } from './types';

export const NAV_ITEMS = [
  { label: 'Home', page: Page.HOME },
  { label: 'About Us', page: Page.ABOUT },
  { label: 'Tournaments', page: Page.TOURNAMENTS },
  { label: 'Training', page: Page.CLINICS },
  { label: 'Membership', page: Page.MEMBERSHIP },
];

export const IMAGES = {
  HOME_HERO: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjihIU6aoTVESdy_KpR7PbxJcaQ7ZkTi6TqkGrbF8o2I6y5iA28J6_TWcQfmMy8qY_K2yBhEth6PRRs8nwEu4bvKVpxIS6bArHsgxIsqfkmF6iUKx8b2Zu0_GX7OaPmZiocZJJx9cc-lasLlM_0Jls20jDBDTrJcL8yJ68Qx3ZJEXwBjDn6P5bJGgPIP5XhZ34wrwTbzVZ0eeHQDSjIFuNVzXfWZCDttqaaxWDAkfcXjiFu9Xi4h0SqWqVAZU83EMkmstYMw6UtpY",
  EVENT_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6P9QPA4PR_z7yDDdt_NaBGqyuc-mp8l39TJzoegYjZKgbPvDGap9iStWxd8CdU36JMPAQOIuDmzCeOv-oJMsxeHsIohc-2D9KkyXn9OyJVDARBWz849TQpWvJnW-rxj0r5ceXhzNJgmLZVi6ERky0sPZiwWAs0BJm8iOqT75bBR9o7pnr672Cr62p-F73GugbL58aH_xAtCdisAAyF1weevdYwbQ6rbAW0cWz-RTg-IPCPvBLezBQCbTS4ZLzGNLcAsa4bALoohc",
  EVENT_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2F7JUl_v6u1kNww9prnVtYz8oVX3vNUeILq2rX3CmYjeDfPPe4bsECpl_zDHdUsNtdatIHee2r77iFDWqSrXkqFdYkYwvbK5Ex4YhFWTjKwEc9dGUaameXLfnRYvayyIqpAu781yKKVbkKaeQZp2e5bOQIQxMJ-WNncj9xeAthHI8VRMzSzX611lxslwCuNTf3W54L1uV7gqX_5HCZawBIJwJZTep_s8PtZ3MCNp0BXQIBMwo4obm7vVL2utN465k5VJSeB1KOzk",
  EVENT_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe9SlCyuyOumwr_3ZqG2ZEyLQrcYNdnDf6uEfy4On1THTTmURi6129FivfmScNDnzEjlNNvCQX_pOBJ6ahDBQLEThsVXguD53eGLOfgCosk_1BNsTLglI3UKvucRm1j5PaqkxoqHXsqemvpeWgnN2Tu0hTkU0N7fM3qp9xvLSHIGAWaw7aJDk9VlXkkNUinLYyRcHU-8MZ35muewz0tpK2z8YfLfdvK67hTB_3VRHfgiqLYCXgELVGcfr2m44Q1YzuddYoeXFJqXw",
  TOURNAMENT_HERO: "https://lh3.googleusercontent.com/aida-public/AB6AXuBefzq2u6gBEqFZG-0SzfjDgxPaWib68SICdBb6qQsMff7UMWtMrMK5znnk6XrABQ82SHmoo0iCbRnq8nxOVtLTW0D7ElQ9rpSe_mBfdnM0Q8repDK247sfrhA6qzadyjSPjhPNuz4latWQHkA67v7vBpGq7LDaOCMOFWX-UN-EYM0BSyvZR_rqg5n7u-LWdESVuIDuUsVfYo4cakdAfajQIFbOm4u85DYodnxODjy5zqAktSPeiIY_mMbMgcxytrsPu_qEsD0ur2w",
  CLINIC_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLQuk0fOlghBgiWP9J8K-jqxw75AtHgu_d1F4offyjBxNG2q98urxaqaWT1mvnUtfXtf0mIICL5wKkfnlOZKshAEviAVuTp3PPgbna_GzIsfKAbJKGbxOBzJUcMFDfut4bH2wt7pOdinZ2NkfVqRrFFH-oAeh2YxkhuAesowSWE79dGUMwATwh_DmS66LpMzVAGXEmb8CZY-OycdU-ECFtfS1B1vYBo7ectvqbWhevvuaQKYEu1ByLqXOibq2v_7Gk7xJ76F7LLOE",
  CLINIC_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3v12_rt_NVb9ewILVqYaatmo5UcYj9vuW6TkMamnhX79oAvbhCrrshN0XGzLDNOzpQZb_zH_B37fuoP3ykM1v33_26Am6lo2SOGmZL2bpdcIfiK2AQfo-8bL_0-3kOZuyfXwxgqzH2GSFUKpmIpva9L4-do3YSgvB5XRCUhcCL8Q87q4YPsgEcO2UcsUe0-2r8dM3zakPg_up1Iwg_wq4Sg4rbk1pPhldHiHAcVNoma9huGMk337jnIoLc52H1FJJfPHj8yzCTJ4",
  CLINIC_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk3x53SDcAgQZYWqoWCrwLrVUD3Vf732ac0ELxmUPC4QkkhHNnwjtViwqJn9GfrRsD5c94LDtksOOT5cFqAJ76IQIyzgpkFt22IxNlnGDCIBr3OTA8zlBknO2eKcSzHgRYbWW6rSNNiGfa_1qAGRL9XRLheSDwXdViudWjyIAN0zl0ZStgvOpXglxf-n5BlXl2PCi8So5qUeX-z5jhizK1Bl17QyAwbENx_gZliIWdvsEwGyj0A8giaSoOZ_dZC2_DJ63XGaRT4rI",
  CLINIC_4: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBP8BlpoMcgN-16j3v1hf3-wpNJGwXXj3sHyGhLBBwcdZazIlib6r6y39dOAlBWg09tyD6h9O_daKsZXy9szIiyZ4N_xZNHOIHJUrztob7XBvfQhWVaG9Sh1RfSXmMybNQ4LfwMTmmFSZfIgSyovPtEaocECmJPsfNCRSIVrVTBBkg-Kg9ACeGzFdUPDJkn6MeCgoMrvP-CX5XpAyscKJv952m1pHITcVgik-S_VIUeSK3lxoHN8E53Nd8H0L9OlMLXXwy8sJmeek",
  CLINICS_FOOTER: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR-FD3sc0fKCplfWWjJ1i6xm1q7QCC1EOWm4J-Aa95Xe6xA40ltg-onXN5UOi5rrNX05BbdWu0LxzA9GeZuM66NdTfVARnodYJolrk855bQvzJKxbcMKSDwPwfCc70sGCGpmwpXF00qJwQ7tMZj0-LJWGSMRU8dxhC1eRAsDHNxzu7Kn6CaTocTR67gEmZo2GSBMb2rzD9ZOILxgcXOlFhbm_RzwULTmPCRla45bn9h_bPaBU3ZCI5_OsvYiXf4DdZ1jtgwI1B4lk",
  ABOUT_HERO: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzPrqqDPriT11thePN_1SWufIaGqLzlAeMYMzl76zX-zy1ZvQmPIeu-Ax6kaJ7rS_k9BO6B1pZDz4CDHwJ4oYBpBG5JUmhcXujNsy_eyE3eSuY8rPg_nc_jt4L3I8aJHuE5IU33z_K5lLmG3rCn75RI9dZ6FN4U5a9IlzXUuoytL5b1G2mtl1QIv16nGC_FeSd5XHMkM8arUjEQd5DdNyduUx6tfWl54JHqBxuxR32hOzd14WHHA5gtl00gG3nzXMAu5rrjLNEwQk",
  ABOUT_TIMELINE_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuApP7a27R6T0LhhqHuK_X-qlPQrbTLyYAOXhMhtCNlgiYWp91MZuHhXUoN1UN3TFuPDEDt1oqLA2-VZwMRxmWKIsuLSZ8FD0PyEDLzCV9nTcnIVKe3-8PsUbkeC_FH-pZrNmaGH_3pG2r19oUucxXo0WLHMKhT6Ajk-cCAUM_4307Hqz2f0nLNA_UDhW_1rcaC1Ks7beosapgyyezeMcKxZGb94jaUTJiFs_ufGGkVST35fHaKbNq9eNA5duuhHmw0R_t8-E4n0384",
  ABOUT_TIMELINE_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiFeO7x7IviDLHyctSCtTEA_FXVp9dJ5dcYnB_G4iSvAqWDQatHtQr8ZWzyJl7byMchKJz1RPL_MrqInjaQb7Ow5x4WGsw8_UbHmbW16xxcQKqCpvRv0VRk5cEt74qaEUOCXvN4ifh8cV8A1MzBhr2n1CxN9PZQm9L8mZkE3yEMKdmHzimjr-z50G9NaNh5zZnVjlmHtYnj2UFNc7uwz8xi18eDM8jVe0K8WyTESSV__SJvgV9R_ZprOzggUnjXnDzmu35GO434yo",
  ABOUT_TIMELINE_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuD73GF1uGRhB5CKfZb5PqOph1mwFVWsiYm13usA781cVtStwFq5GRampXEG3JWQm_Yw_NgjrSlSInkLalJlsts7t8zTttw3t-relfpj8Uq9V4QWk44IOcxDelRt4Fz6Moq5d8XAdVWW4y2UrSb-Zrhw1UYqoTymAFcddeu65noYpoFq54P6Sv2BXhX9yMxreajtyTVqNgwtxHnTg7-2aO1K6RXNBpAfm-fvFw5XbPpIQEDbFw8DsoCEoWZS4S1m5skSKjAz8XVXN9Y",
  ABOUT_TEAM_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl6-n1plobmkyXMy_ZPNYbpQlZJdj9TDVEM4FglAYSnzuFpZ3mHVuocqdtEGzIQhx_BJB-E11_aMYMD-31F5tD7Q-wsLv0Zs-HURW9BQiL8wqTa2XBRYf5mlcU8j7MEHFt4OC234xYR1u6cGsEBS2u3DzDws8PDQ_u72e9AAL3ewM7_JIc_wEfzHeODcjTO_d7oD6-Sc8eZv3fjBTTT2dKabqdMmkR7zLYfp8Lpvn_cAZ3oY918pbwg33pwsCIzWioYXMATcL5ifc",
  ABOUT_TEAM_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfNiMoFvT5vBXncGEdsueTjLRid-daWehcF9ldIc7r7ZzHErJaKAzYaeIWLyRD38Kg9wKzkAqq1HNqm39-9ean72Z_U3hvaaXmSO4RpkJh2DuGgWKS9-hXhB_SdSsL_5kYrZK8991gnF5ZpcBglBTL2h6eUQuWWWakw-WSGfEBEwhlT9OiG1cydLnXnU7VZyYQwW-TKuGcl2vIBOxsQm6h1aYPPYXMhjVAa2qGDNtUBgs0bjJfq792SWSqpRAUryZV_E6Afz7RErw",
  ABOUT_TEAM_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnJ3120H66WqRd9YKaL8v30_nSQjwishpNFCCfd-lwhYjBpSqCQSUeH_-Q9gCR6w2dPWttCA8GU0r5LVxgr1b8sC_kJD1aZhbspAJ7mhIiZNFyfsqsc5fYaAXISlsB8_gFMYWWcFkALHk8HQPPISutSfJIo79ozZm9qX4NOOf5vwEXMBlFcIN9xRWUIEeWf9J-sIGrYKUzh_MU-Y5pD8cvC_n5dqCQzODVc5MzE73GJaRAAOSKW1thZ3ZXeQzdi21YWplnP7yD18",
  ABOUT_TEAM_4: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0xda9AptAnvHdNnO-Fk2WdNMFsI3-qDP33J8Ukd0m9TKS67-EIGVRxZCzxDEWBVMUpNBkYBiOtGYfSNBf_DAUonpKJVfgO_PnR-qoceaZrf7EbuRYyijS0KbCjoCMPf-gOvDrkGMoCe537fQRhe5fZ8SCd2j9RtRZPB6iF2Qwx5fSUWSFJfWBSgmzFBLg4eV4WwjcVTP89HXZb1ocOlc9gOd5esHUYs6q5XcFEsn0nogdDQBNaPBZPiFDAY4PqcGbyAF0Nb37cc",
  ABOUT_CTA_BG: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdzysI93JflxeZmXY27ifmxQiP7Bl-wmKx7DFG52K_TNZcQ-XofB3QjOPpARA2aHKRtXoh39oJ3igRlEkvcHVQ8M-oS8q2ZGGBL-PWeMMKwlpZOnnjTF94MbUXpXqBMBZdF-gXA3Ra6xyuyPKjSALr9hI3PlQUiVALlnAGwUPZSRvuKdDw7wHXoOO39c7QRcX4xeYch8JADrmEtWHvVRw-OoWuEa0f0ozyQeieg2OYWiE-7cHDQs_1y-89wqGJ8hN_HPNcV1fb_RI",
  MEMBERSHIP_HERO: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE8JLNFzuvyF8Ldj501S9x9SY-_N-pxgjPVEq4WM2mzpzA2Wv4hwXqgQg8fcNNPrYf0tCKmI2oZcfC0DT7vth-D8sNVvnENhaMen2KIU_aotemrtTbmqN5NoN7o7WrdvdooeJZuAzBbRmlKLd0k2-A89Eql2VimSzBJ-ZtWsENEuE6kFG1ZAMvfkZw8hVBju3KQDg-UpTuxaRjzh7wU2e2ry5-tJLo7ta1KLgGyzZ5EooAt84NMW5j95UpmuoCUCeXBEMMgNjEB8k",
  MEMBER_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKrzfG3iyWVN2oeKOtsOeTav6PtwRwI8DkA6KFdd_zUeq4DyErU42KkzvWPc-OSeyNQw923_Vwr-djLDlG9T0E6-fpSlVT7fbGt_pGjIkdqQ2pYFjYA6omeOhTrr1T4sWqLxjZ5efajPfi5e6bIWpNjKu0KYm-mHrGpgq49jbQisxlslAMsDZvqNNthJHNOwUDTeoNWXM-VY6vuKHrOdPm2Wz9QMOZDJcjMlueVvAOC64Wqu5FMFA7wkJHEJ37Doo-5DiFXu8lqaA",
  MEMBER_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE2d-AubtBOK2ao9HkOFyBfL5JOuVzeZZpc90pPz1Yim85sEBkLTy_hM89Jdq8MtfYXfZU9DNoGUaeI6fWCTHK2TSDNUh5QJ_showQhjeRVSCGYyix3gSO7Tyhy48FS92zj6lW3ysjim_c2NXe_f05EBkHxbFu6T2eF1ZVPmCzd1vkz0PdX_rwwP5T9SGoSht7Xlqxr6u5v9DFiAdCiq9x7zHtNTbwFHEJiGiOq1sgjkkSIzOIxSswxe8npkvO3VHbWwZ2KOWR4gc",
  MEMBER_3: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKVWc6aZSq3yT85gviTz_ZxlAVQhjnG-6wgw0ADGjXZxAThQVOpkh6KU3adxvDLpbyU7_ZsLXR-rJetyH5thjqbK_-EhhmGDYO94K9SU_3i6ga1yW7LKNBP2Nkz5T-33MvvzSc9speHxkoQIEribRc-EVR9Q8J8OJ9308LM7lsqKCXp7wZj0bZ2NDUcI_B3RF32n3qSW78WfEYODOu8u18rYydvbQOuKfjMW9SpLweuCHcG4VvBnmHsBD6WSXuKX_EYprkj6wQ_0w"
};

export const TOURNAMENTS_DATA: Tournament[] = [
  {
    id: '1',
    date: 'AUG 24',
    day: 'Saturday',
    time: '09:00 AM',
    title: 'Summer Smash Invitational',
    tags: [
      { label: '2v2 Pro', color: 'bg-primary/10 text-primary' },
      { label: 'Open', color: 'bg-emerald-100 text-emerald-600' }
    ],
    prizePool: '$1,500',
    entryFee: '$60 / Team',
    location: 'Main Arena',
    spotsLeft: '4 / 16 Teams',
    spotsColor: 'text-primary',
    registeredAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDApKbdnnLSgq6DCGrAwRCdNWG-dzDLW_pyCY2CCyYrkbE-yUXiiUor65r8jvl-v3sPtOLhJd7ZSwqh4X4aPOgXs-8pN3Z83lbsOCE6Rx-pKD2shC5kRz-xIMixoMkTDwqspqhxUOsG53O-G56oXBwDeLp6EEvyQEtz9Oja7xgt6kO16sFmWjZH2gEEczoc18_V79CPseZtkcU1gJS-gZyCJ67hdqcGFuZ49nk_9nhGeBf8MAzHVPGnvcttUrThy6MoJVqbkh12cKk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4gpNkeYxyNftXMXRbU7E2MVBtC1nxtHR0RaXHG4AXeFuEJaURrOCwj3FlBRx9PvloV6Is9UNpQZLs4kQeEyRCdgHU1TxMYnQGr6fenQwBE5PsyYnJGTfOmYySsXCPzfwaGGmgNkGoG2Q2tnJPsxXwEmpN42BrvVq1BAUYCYCa3S7AWcnk1TwWEvhkdrCwOg-1RUNnHdP7s1A6PsdBmcZG0Qrw3wFwQCeGe-sMYCOVNDHvh_r0ceuTOORFgu9YBJAUYBOaYVvSTfM"
    ],
    registeredCount: 12
  },
  {
    id: '2',
    date: 'SEP 02',
    day: 'Monday',
    time: '05:30 PM',
    title: 'Labor Day Co-Ed Open',
    tags: [
      { label: '4v4 Mixed', color: 'bg-orange-100 text-orange-600' },
      { label: 'Filling Fast', color: 'bg-amber-100 text-amber-600' }
    ],
    prizePool: '$800',
    entryFee: '$40 / Team',
    location: 'Courts 5-8',
    spotsLeft: '2 / 24 Teams',
    spotsColor: 'text-orange-500',
    registeredAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKG-uH3mXLPSCzsj72XOVGiNGsgXqwOV_c1Fay5e3eXiwqvJLcIYCsybt3dxHHvrL1V2vaQlXLotu8Yq-p_iZ2CcVox1RI5edgrSAges4E9TlgMaGlnET4HxH5ZUdNj1ydS4CmDQv2sgEOd2OE-yJDXUxE2sLQdxCRAciU8Gpckpzn89lPk5Kd05Moh1_wq4fX3lCkFHVsTSmVH4oA5k_Rbg2oZKOv5xmK4IutwI4UI5okid8YnfiBw0mOz1ukTWfL-4ZC-xfhzFs",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMuIcSvMA9zErGM5VCOJA1VNS4_-jc4ewea24GMvXqHHkfmLx9pNW9wGnojn4bK5_OWGgrR4kHaIldn1KRyMSDgISU_9gmZ7ppebgWKUF-gNpOmUz96upaV1bf0b3RkFezwZD_m7a3fNFwIlBEFZZiDihKm_Na6Rs8SzzdTWRtZdRUwOowzc8fBQyG2dQA5BRrHTcnivWdt_wrk3hAISyaqJMApCIvHjGRFq6bNUstmBoyLH2hzBsgx2Q8LOnRIlISuvjlnFtUuZY"
    ],
    registeredCount: 22
  },
  {
    id: '3',
    date: 'SEP 05',
    day: 'Thursday',
    time: '',
    title: 'Night Volley Under Lights',
    tags: [
      { label: '2v2 Amateur', color: 'bg-slate-100 text-slate-600' },
      { label: 'Sold Out', color: 'bg-rose-100 text-rose-600' }
    ],
    prizePool: '$400',
    entryFee: '',
    location: '',
    spotsLeft: '',
    registeredAvatars: [],
    registeredCount: 0,
    isFull: true
  }
];

export const CLINICS_DATA: Clinic[] = [
  {
    id: '1',
    title: 'Power Serving Intensive',
    image: IMAGES.CLINIC_1,
    badge: { label: 'Most Popular', color: 'bg-primary' },
    price: '$45',
    date: 'Sat, Oct 14 • 9:00 AM - 11:00 AM',
    location: 'Main Court 4 • North Beach',
    coach: { name: 'Coach Marcus', avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuARBPIvsS2_VF3ckE0_oO2u-T47WS8asMFhtEY8nYxyOYDk0O5E0TzzqPs9UTZWQjs4LZWIDsZSgfA3j9ESSn8Gj3_ES1Yh1TT1dPyGhInEfoRPXDBQlDZ17NQDAYoDvUX_OwK1E5zm26tadOCgFX5ngp_JXmb9NHb56IIQurINsN3wKvU4BkOrsakw6K-mGPtu5xy1fYu7YE1znRsC1tfkY4MD80Nnkuuhl2VmlpUys9Zi3aHKQslKlCRHDMolLfByS0WzOvo0YP0" }
  },
  {
    id: '2',
    title: 'Defensive Positioning 101',
    image: IMAGES.CLINIC_2,
    price: '$35',
    date: 'Sun, Oct 15 • 10:30 AM - 12:30 PM',
    location: 'Main Court 2 • North Beach',
    coach: { name: 'Coach Elena', avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLLbm3BVqA3eh168blf1nK8HYzPH5B4XD0vauC8E9ydEZzHLtLlsvhCXl2kIkp_wdrF7MzwFgfqpZXyQSqUM2n9FGIi-2SCJLTVhfTOZ6p1mklKv8lX0eGKiGMyx_lcByayi4c6mhUHXnWEZ8w9tC7_9dLYZgnL3aLYl4HpnuSp0I6S4wbNIx8iHzRs6xw3jhhHixrHLqVViYk90nGL82Lia5C_MhXIpTDZGOULh-DwcPVVhEQVJPLkdKDJN7ve3Kvk487M-9k7jg" }
  },
  {
    id: '3',
    title: 'Beach Fundamentals',
    image: IMAGES.CLINIC_3,
    price: '$40',
    date: 'Mon, Oct 16 • 4:00 PM - 6:00 PM',
    location: 'Practice Area • East Dunes',
    coach: { name: 'Coach David', avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQPFcdTUH5DvD-KXLeJ8hutxnkMeZQr2-LHXbBsbyqQlGRvB_skthnH56XYNiZFZsaQRXufq7RIoAjNOx1e9amRlRFV-Pq-l5opNll30L9WB8YAy6OafQM66hy2BmryEdpl6jC8ylACpyAMDTi77Tei3ZiFWlZid5TPpR5d-R7MzFBdhQgYzeUIkQS2_npZe8V9KH0CBGh9cLi04he6FQOwVlEp_fVUEcoRA8im0oEmYnRHy9291SOmhIwSbHFsT0lUZxAQpvBZxs" }
  },
  {
    id: '4',
    title: 'Transition & Movement',
    image: IMAGES.CLINIC_4,
    badge: { label: 'Few Spots Left', color: 'bg-amber-500' },
    price: '$45',
    date: 'Wed, Oct 18 • 5:00 PM - 7:00 PM',
    location: 'Main Court 1 • North Beach',
    coach: { name: 'Coach Marcus', avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGWCpFq1IKHEN8PIUmkwyGcs9BfcG_CUK2qibZv0OPYgGDzc43WKbb6C0t429TQ0Ub8SXXZ_yjS_wQpEx1ZXUQHCZHQKrBbl7oOLqgz9hVAaZhuyZdrb4vFV-nqp2V7S6MxndZoFwvthlh02tHaX5Lf2FoQq72Pp7iacEuJ3fW3jHrs7As5AR73IdAqBT7L_2kYobldpF2GcTNPQXjasAxme8Rd5s4lJ8-xdYS6zBl1MVTsjjGNLljG0JZTPP2OtNYVbVJ852SQMA" }
  }
];

export const COACHES_DATA: Coach[] = [
  {
    id: '1',
    name: 'Coach Marcus',
    role: 'FIVB Level 2 Certified',
    description: '12 years of professional tour experience. Specializes in jump serving mechanics.',
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3MIloXYB1u8wwJIZNnYekS9gzpt-NXi_MROip9nyT8lZjFfbG0pZ-hUWAJ_GaYrF92uDV67d_m5WhTZ-Nhd0pAnxfi8BIz1j9Ow5921hnOPD7rDfpnuV0MuV6oqp720X20uN78Ll5PexUqbrksnIFaSVk6ObKVydzj6PSDcT6fLZeZB_umNXwgu9p63IUG28Rl5nIXt1m5Pc21wxq4kpArFdL5ZY6xkTkGFxn6KgikmmXPXT9wIt6eVBa8V7R36iWYUEKrlUlN1M",
    verified: true
  },
  {
    id: '2',
    name: 'Coach Elena',
    role: 'AVP Pro Athlete',
    description: 'Defense specialist and court strategist. Loves teaching beach transitions.',
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAldag5hmfcU0UQWDqQ45WoPhBfoGcsV31EGc6aZrpVC1w3paW_26_FS5DWcspDn-PrA2pO8vlhQny0aBC4JCmsaczwc6mbx3oV7kSgJE7738DSWsU0c6yPfVS7clzl21bKPzhz6OCYAH3DXTLAs7Xwl8TLZWkIHVe8FxZEuX6nqFv8AnmOTFbXU5W0e-4FwVCmWMvvRccAvYPTsswlFdXSUpEoeHqIgWi4rbu3bH7Do1ry016UfCRHoe1hKlOrMa-5p5uoccKtMk8",
    verified: true
  },
  {
    id: '3',
    name: 'Coach David',
    role: 'Youth Development Lead',
    description: 'Passionate about teaching fundamentals to all ages. Focuses on consistency.',
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDypMI6-ONpfgxs9I5NArQ6WKyu4qcgMg71Rp2SeY3N7RBNYTEhz0jZbmi-mIro7Q_lCqMcEoruCLN_ATKOmNjlpXnF3ZQnYsfQ9KTI7VFK2Z-iTsr_hS3NqQM-w_LoDeJJUCgKjE0bBpfTGAEP13-VPzDlSxio1QERfY7IYwSG9mpFXqUjs-DVrNjuqfGVpHpcC8OJqE7B2ny9R6_0RCLXqVw056bE1Mup7cTPR8u9NINyOaFt1yFlRZuzrJOM1AmPkh2jJyWN7gQ",
    verified: true
  }
];

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Alex 'Ace' Rivera",
    wins: 14,
    losses: 2,
    points: 2850,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXVFM4VVSwlaTZFiKpqtegIw5rJCfISyFAnvxJe1B6s7mcV8_2S-hg8dHG834b7Uo5syjO0mR0jb73zmNXMzVPlhBlXN3QNqNju6YB1XAixNzjq7MReaGhaGcxU98fdzCRpcliuj9jmUV4_aGJnwltDyc4-Lr2xZbfPB_y2BmIRiWqqemMZVQqznjC3iZpXdLBiJiYm2BEDReXORyUvzou3FcKddlqd5HYorj79HEAAxy2nFdLds-ebOiAS0Hd-bYEhdpT81oYY9Y"
  },
  {
    rank: 2,
    name: "Sarah Jenkins",
    wins: 12,
    losses: 4,
    points: 2420,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzFoJX4oL5IeGqa-EZmP3JqlEPDXP1R5MuBwI3LQFBtVi0YaJDltfyX-8RwYB54ap8wxUtqjQj60Y4SAolaL_EH4INpp5YBME1OQbGejeRMdV2pGCKJS5pMYTDZMpnwr5133PBxaI_47fF7jnf2L43BzLvqRK7xMuurQ4dmlKBw5xiSCf-874IRJHd7AHgvJYs8v7MTCQSnuHsSBFOKIthMjD-OufAIPC17qypM1xLG5mdSTUu6jWO4epoDcIdAP-HL3lfs6aE6vY"
  },
  {
    rank: 3,
    name: "Marcus Chen",
    wins: 11,
    losses: 5,
    points: 2180,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWFRFCytFOquVWnhYUpZUfjB0kK_nV4qYPXQlZfy9aKZ_r2fi7Qis8Dm77S5ehinaq_Dd9u_93uwAkpHzPd1g2MnNcdvVz4VLQHtVBt_GoOK3Cc1uorx4cENXIyzRpHBqC0BRwxgZUrE0c8t7IieKo2m8wkh5NjXrScXXZNHrfJLtCpJXiN3WiKMBT_PlcJsEiKcwZ_4GwJS2nFyyADt-KhThZqV2LDTlNwAUwWTTi8RBZu_17YYEMxC3-7QjprKSZc8smlQy5jGQ"
  },
  { rank: 4, name: "The Sand Blasters", teamName: "The Sand Blasters", wins: 0, losses: 0, points: 1950 },
  { rank: 5, name: "Beach Kings", teamName: "Beach Kings", wins: 0, losses: 0, points: 1720 },
  { rank: 6, name: "Chloe Smith", wins: 0, losses: 0, points: 1680 }
];
