const mockHistory = [
  {
    date: '2023-09-20',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '수영하기',
          habitContent: '수영장에서 1시간 수영하기',
          habitStartDate: '2023-06-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'thu'],
          startTime: '10:00',
          endTime: '11:00',
          penalty: '아이스크림 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image3.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '산책하기',
          habitContent: '공원에서 30분간 산책하기',
          habitStartDate: '2023-04-01',
          habitEndDate: '2023-10-15',
          doDay: ['wed', 'fri', 'sun'],
          startTime: '18:00',
          endTime: '18:30',
          penalty: 'TV 시청 1시간 줄이기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image4.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-21',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '요가하기',
          habitContent: '집에서 20분간 요가하기',
          habitStartDate: '2023-01-10',
          habitEndDate: '2023-09-21',
          doDay: ['tue', 'sat'],
          startTime: '07:30',
          endTime: '07:50',
          penalty: '간식 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image5.jpg',
          status: 'approvalFailure',
        },
        habit2: {
          habitTitle: '종이접기',
          habitContent: '한 시간 동안 종이접기 연습하기',
          habitStartDate: '2023-08-01',
          habitEndDate: '2023-11-30',
          doDay: ['sun', 'thu'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '게임하기 1시간 줄이기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image6.jpg',
          status: 'approvalSuccess',
        },
      },
    },
  },
  {
    date: '2023-09-22',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-22',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-23',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-24',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-25',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-26',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-27',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-28',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-29',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
  {
    date: '2023-09-30',
    userIds: {
      userId1: {
        habit1: {
          habitTitle: '운동하기',
          habitContent: '아침에 30분간 유산소 운동하기',
          habitStartDate: '2023-01-01',
          habitEndDate: '2023-12-31',
          doDay: ['mon', 'wed', 'fri'],
          startTime: '07:00',
          endTime: '07:30',
          penalty: '초콜릿 1개 포기',
          creator: 'someUserId1',
          sharedGroup: 'someGroupId1',
          habitImage: 'url_to_image1.jpg',
          status: 'approvalSuccess',
        },
        habit2: {
          habitTitle: '독서하기',
          habitContent: '저녁에 1시간 독서하기',
          habitStartDate: '2023-02-01',
          habitEndDate: '2023-11-30',
          doDay: ['tue', 'thu', 'sat'],
          startTime: '20:00',
          endTime: '21:00',
          penalty: '커피 1잔 포기',
          creator: 'someUserId2',
          sharedGroup: 'someGroupId2',
          habitImage: 'url_to_image2.jpg',
          status: 'expiredFailure',
        },
      },
    },
  },
];

export default mockHistory;