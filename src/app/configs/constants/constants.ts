export const CONST = {
    CONNECT_ERROR: 'Không thể truy cập tới hệ thống.',
    DEFAULT: 'Tên đang nhập hoặc mật khẩu chưa đúng.',
    EMPTY: '',
    VERIFY_CODE: 'Nhập mã xác thực chưa đúng.',
    NOT_FOUND: 'Đang tải',
    DEFAULT_SERVICE: 'Beauty Service',
    DEFAULT_BANNER: 'assets/img/cover.jpg',
    DEFAULT_PAYMENT_METHOD: 'cash',
    BOOKED_SUCCESS: 'Đặt lịch thành công.',
    APP_VERSION: '2.0.0.5',
    THEME_NAME: 'glamstye',
    DEFAULT_PLACEORDER_SEARCH: 'Nơi bạn muốn...?'
};

export const COMBO = {
  branchId: 169,
  createdAt: '2019-05-01T07:55:53.116366Z',
  description: 'any',
  durationInMinutes: 65,
  friSlot: {openHour: '10:30', closeHour: '19:00', lunchBreakFrom: '12:00', lunchBreakTo: '13:30'},
  id: 500,
  monSlot: {openHour: '10:30', closeHour: '19:00', lunchBreakFrom: '12:00', lunchBreakTo: '13:30'},
  name: 'Cắt & nhuộm highligh toàn phần',
  note: '1000000',
  price: 999000,
  priceCustom: '60.000',
  recurrenceInMinutes: 0,
  satSlot: {openHour: '10:30', closeHour: '19:00', lunchBreakFrom: '12:00', lunchBreakTo: '13:30'},
  selected: undefined,
  spots: 1,
  sunSlot: {openHour: '10:30', closeHour: '19:00', lunchBreakFrom: '12:00', lunchBreakTo: '13:30'},
  taxRate: 0,
  thuSlot: {openHour: '10:30', closeHour: '19:00', lunchBreakFrom: '12:00', lunchBreakTo: '13:30'},
  time: undefined,
  tueSlot: {openHour: '10:30', closeHour: '19:00', lunchBreakFrom: '12:00', lunchBreakTo: '13:30'},
  updatedAt: '2019-05-01T07:56:49.218082Z',
  wedSlot: {openHour: '10:30', closeHour: '19:00', lunchBreakFrom: '12:00', lunchBreakTo: '13:30'},
};

export const LOCAT = {
    lat: 10.7900517,
    lng: 106.62819009999998,
    isActiveLocation:  0
};



export const CATEGORY = [
    {
      id: 1, name: 'Cắt tóc nữ', serviceType: [
        'Cắt tóc nữ', 'Cắt tóc mái', 'Tỉa tóc nữ', 'Cắt sau sấy', 'Cắt tóc tém', 'Cắt tóc ngắn', 'Cắt tóc lá', 'Cắt tóc layer nữ',
        'Cắt tóc ngang', 'Cắt tóc undercut nữ', 'Cắt ngắn sau gáy', 'Tóc fade nữ'
      ]
    },
    {
      id: 2, name: 'Cắt tóc nam', serviceType: [
        'Cắt tóc nam', 'Tỉa tóc nam', 'Cắt tỉa sau gáy', 'Cắt tóc layer nam', 'Cắt tóc undercut nam', 'Cắt tóc đinh', 'Tóc nam hàn quốc',
        'Tóc nam công sở', 'Tóc nam đi học', 'Tóc fade nam', 'Phong cách buzz', 'Phong cách edge up', 'Cắt kiểu line up']},
    {
      id: 3, name: 'Cắt tóc cho bé', serviceType: [
        'Tóc tết cho bé gái', 'Tóc tết cho bé gái', 'Cắt tóc kiểu cho bé trai', 'Cắt tóc cho bé', 'Cắt tóc undercut cho bé trai',
        'Cắt tóc layer cho bé trai'
      ]
    },
    {
      id: 4, name: 'Nhuộm màu tóc', serviceType: [
        'Nhuộm tóc một màu', 'Tẩy và cân bằng tông màu tóc', 'Nhuộm màu nâu ánh đồng', 'Chữa màu nhuộm', 'Phương pháp nhuộm kép',
        'Nhuộm tóc tạm thời', 'Nhuộm lưng chừng', 'Nhuộm bền màu', 'Dặm màu chân tóc', 'Màu bán vĩnh cửu', 'Phương pháp nhuộm đơn',
        'Nâng tông hoặc hạ tông tóc', 'Dặm màu tóc', 'Nhuộm tóc màu khói', 'Nhuộm tóc màu nâu', 'Nhuộm tóc màu nâu đen',
        'Nhuộm tóc màu nâu đỏ', 'Nhuộm tóc màu nâu đỏ ánh tím', 'Nhuộm tóc màu nâu đồng', 'Nhuộm tóc màu nâu hạt dẻ',
        'Nhuộm tóc màu nâu khói', 'Nhuộm tóc màu nâu lạnh', 'Nhuộm tóc màu nâu rêu', 'Nhuộm tóc màu nâu sáng',
        'Nhuộm tóc màu nâu socola', 'Nhuộm tóc màu nâu tây', 'Nhuộm tóc màu nâu tím', 'Nhuộm tóc màu nâu trầm', 'Nhuộm tóc màu nâu vàng',
        'Nhuộm tóc màu rêu', 'Nhuộm tóc màu tím', 'Nhuộm tóc màu tím trầm', 'Nhuộm tóc màu tối', 'Nhuộm tóc màu vàng',
        'Nhuộm tóc màu vàng cam', 'Nhuộm tóc màu vàng đồng', 'Nhuộm tóc màu vàng khói', 'Nhuộm tóc màu vàng nâu', 'Nhuộm tóc màu vàng rêu',
        'Nhuộm tóc màu vàng sáng', 'Nhuộm tóc màu vàng tây', 'Nhuộm tóc màu xám rêu', 'Nhuộm tóc màu xanh đen', 'Nhuộm tóc bạch kim']
    },
    {
      id: 5, name: 'Nhuộm highlight', serviceType: [
        'Nhuộm tóc babylight', 'Nhuộm balayage', 'Nhuộm highlight tương phản', 'Nhuộm highlight một màu', 'Nhuộm vẩy màu nhẹ lowlight',
        'Nhuộm ombre', 'Nhuộm balyage một phần', 'Nhuộm tương phản một phần', 'Nhuộm highlight một phần'
      ]
    },
    {
      id: 6, name: 'Tóc kiểu', serviceType: [
        'Kiểu tóc bồng bềnh blowout cho nam', 'Kiểu tóc bồng bềnh blowout cho nữ', 'Kiểu búi tóc nữ', 'Kiểu tóc búi nam',
        'Kiểu tóc duỗi thẳng', 'Kiểu tóc Style nam', 'Kiểu updo công chúa', 'Kiểu uốn barrel'
      ]
    },
    {
      id: 7, name: 'Phục hồi, điều trị, chăm sóc tóc', serviceType: [
        'Điều trị tóc bết dầu', 'Chăm sóc tóc khô cứng bằng liệu pháp dưỡng ẩm sâu', 'Phục hồi độ bóng cho tóc',
        'Điều trị malibu giúp Điều hoà và trị tóc khô xơ', 'Điều trị olaplex Phục hồi tóc cháy nát',
        'Phục hồi protein cho tóc giòn, dễ gãy', 'Chăm sóc da đầu ngứa, khô, nấm', 'Phục hồi mượt tóc', 'Điều trị rụng tóc',
        'Phục hồi tóc', 'Phục hồi tóc collagen', 'Phục hồi tóc giá bao nhiêu', 'Phục hồi tóc hư tổn', 'Phục hồi tóc hư tổn bao nhiêu tiền',
        'Phục hồi tóc hư tổn tại nhà', 'Phục hồi tóc keratin', 'Phục hồi tóc khô xơ'
      ]
    },
    {
      id: 8, name: 'Tóc tự nhiên', serviceType: [
        'Liệu pháp cellophane', 'Liệu pháp tinh dầu hấp tóc', 'Uốn tóc xoăn với thanh flexi rod không dùng nhiệt',
        'Uốn tóc xoăn với ống perm', 'Cắt kiểu tóc tự nhiên nam', 'Cắt kiểu tóc tự nhiên nữ', 'Cắt tóc xoăn tự nhiên',
        'Ép uốn lụa tự nhiên', 'Uốn tóc không nhiệt với bộ spiral', 'Chuyển đổi kiểu tóc tự nhiên'

      ]
    },
    {
      id: 9, name: 'Tóc nối', serviceType: [
        'Nối gắn kết bonding', 'Nối tóc màu', 'Tỉa tóc nối', 'Tóc nối', 'Nối lông vũ', 'Tóc nối nguyên đầu', 'Nối bện Fusion',
        'Nối keo', 'Nối tóc LOC', 'Nối khoen cực nhỏ micro ring', 'Nối liên kết vi mô microlink', 'Nối một phần', 'Nối tóc kim tuyến'
    ]
    },
    {
      id: 10, name: 'Tết tóc bím', serviceType: [
        'Nhiều bím box braid', 'Tết tóc bím', 'Tóc tết cá tính cornrow', 'Tết móc chốt crochet', 'Tết ghana', 'Tóc tết chiến binh',
        'bím tóc cá nhân', 'bím tóc thơ mộng', 'bím tóc cây', 'Tết sợi'
      ]
    },
    {
      id: 11, name: 'Uốn tóc', serviceType: [
        'Uốn Air wave', 'Uốn kĩ thuật số', 'Uốn tóc', 'Uốn tóc dài', 'Uốn tóc ngang vai', 'Uốn tóc ngang lưng', 'Uốn tóc ngắn',
        'Uốn tóc cúp đuôi', 'Uốn đuôi tóc', 'Uốn tóc gợn sóng', 'Uốn tóc lọn', 'Tóc uốn xoăn', 'Tóc uốn nhẹ', 'Uốn tóc nam', 'Uốn tóc nữ'
      ]
    },
    {
      id: 12, name: 'Tóc búi', serviceType: [
        'Tóc búi bantu', 'Tóc búi knot nam', 'Tóc búi zulu nữ'
      ]
    },
    {
      id: 13, name: 'Kiểu Locs', serviceType: [
        'Kiểu tóc dreadlock-dây thừng châu phi', 'Dây lò xo', 'Bảo dưỡng Locs', 'Locs kiểu'
      ]
    },
    {
      id: 14, name: 'Duỗi tóc', serviceType: [
        'Duỗi tóc', 'Duỗi Phục hồi', 'Duỗi phủ bóng', 'Tóc duỗi tự nhiên', 'Tóc duỗi bấm', 'Tóc duỗi cúp', 'Tóc duỗi phồng',
        'Tóc duỗi thẳng'
      ]
    },
    {
      id: 15, name: 'Phụ kiện tạo kiểu tóc', serviceType: [
        'Phụ kiện lông vũ', 'Thanh cuốn flexi', 'Ống uốn perm', 'Xả tóc', 'Máy uốn roller', 'Dầu gội tạo kiểu', 'Bọc lụa', 'Lô uốn'
      ]
    },
    {
      id: 16, name: 'Ép tóc thẳng', serviceType: [
        'Ép thẳng brazil', 'Ép thẳng kiểu nhật', 'Ép thẳng keratin'
      ]
    },
    {
      id: 17, name: 'Tóc xoăn', serviceType: [
        'Tóc xoăn kết hợp', 'kiểu xoăn phẳng', 'Xoăn havana', 'Xoăn kinky', 'Xoăn dây', 'Xoăn marley', 'Xoăn nubian',
        'Xoăn senegalese', 'Làm tóc xoăn'
      ]
    },
    {
      id: 18, name: 'Tóc giả', serviceType: [
        'Tóc giả', 'Gắn tóc giả', 'Bảo dưỡng tóc giả'
      ]
    },
    {
      id: 19, name: 'Nhuộm màu cho nam', serviceType: [
        'Nhuộm bigen', 'Nhuộm râu bigen', 'Nhuộm màu xám khói', 'Nhuộm bạch kim', 'Màu nâu hạt dẻ', 'Màu nâu khói',
        'Màu nâu lạnh', 'Màu nâu rêu', 'Màu nâu tây', 'Màu xám khói', 'Màu xanh rêu'
      ]
    },
    {
      id: 20, name: 'Hớt tỉa tóc nam', serviceType: [
        'Tạo kiểu râu', 'Phong cách buzz', 'Thiết kế', 'Phong cách edge up', 'Phong cách fade', 'Khăn nóng', 'Cắt kiểu line up',
        'Cắt tỉa ria mép',  'Tỉa lông mày', 'Cạo lông mặt', 'Cạo bass tóc'
      ]
    }
  ];

export const LOCATION = [
    {
      city: 'TP Hồ Chí Minh',
      county: [
        'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8',
        'Quận 9', 'Quận 10', 'Quận 11', 'Quận 12', 'Thủ Đức', 'Gò Vấp', 'Bình Thạnh', 'Bình Tân', 'Tân Bình', 'Tân Phú'
      ],
      location: {
          'TP Hồ Chí Minh': {
            lat: 10.762622,
            lng: 106.660172
          },
          'Quận 1': {
            lat: 10.7725504,
            lng: 106.6958526
          },
          'Quận 2': {
            lat: 10.780185,
            lng: 106.723814
          },
          'Quận 3': {
            lat: 10.7792479,
            lng: 106.6723693
          },
          'Quận 4': {
            lat: 10.7607494,
            lng: 106.6954122
          },
          'Quận 5': {
            lat: 10.7558399,
            lng: 106.6600377
          },
          'Quận 6': {
            lat: 10.7454704,
            lng: 106.6293227
          },
          'Quận 7': {
            lat: 10.7375815,
            lng: 106.6933229
          },
          'Quận 8': {
            lat: 10.7228825,
            lng: 106.6278673
          },
          'Quận 9': {
            lat: 10.8295601,
            lng: 106.783756
          },
          'Quận 10': {
            lat: 10.7727178,
            lng: 106.6606732
          },
          'Quận 11': {
            lat: 10.7659454,
            lng: 106.6391147
          },
          'Quận 12': {
            lat: 10.8613975,
            lng: 106.6256785
          },
          'Thủ Đức': {
            lat: 10.8546085,
            lng: 106.7181451
          },
          'Gò Vấp': {
            lat: 10.8354056,
            lng: 106.6489834
          },
          'Bình Thạnh': {
            lat: 10.7546664,
            lng: 106.7001598
          },
          'Bình Tân': {
            lat: 10.7693181,
            lng: 106.5567226
          },
          'Tân Bình': {
            lat: 10.803547,
            lng: 106.6357634
          },
          'Tân Phú': {
            lat: 10.791457,
            lng: 106.6098949
          }
      }
    },
    // {
    //   city: 'Đà Nẵng', county: [
    //     'Quận Hải Châu', 'Quận Cẩm Lệ', 'Quận Thanh Khê', 'Quận Liên Chiểu', 'Quận Ngũ Hành Sơn', 'Quận Sơn Trà'
    //   ]
    // },
    // {
    //   city: 'Hà Nội', county: [
    //     'Quận Ba Đình', 'Quận Hoàn Kiếm', 'Quận Tây Hồ', 'Quận Long Biên', 'Quận Cầu Giấy',
    //     'Quận Đống Đa', 'Quận Hai Bà Trưng', 'Quận Hoàng Mai', 'Quận Thanh Xuân'
    //   ]
    // }
];


export const EXTRA = [
  {
    name: 'food',
    displayName: 'Gần nơi ăn uống',
    icon: 'assets/utilities/ic-food.svg',
  },
  {
    name: 'baixeoto',
    displayName: 'Chỗ đậu ô tô',
    icon: 'assets/utilities/ic-car.svg',
  },
  {
    name: 'shopping',
    displayName: 'Gần nơi mua sắm',
    icon: 'assets/utilities/ic_shopping.svg',
  },
  {
    name: 'wifi',
    displayName: 'Wifi miễn phí',
    icon: 'assets/icon/new-extra/wifi.svg',
  },
  {
    name: 'maydieuhoa',
    displayName: 'Điều hòa',
    icon: 'assets/utilities/ic-air.svg',
  },
  {
    name: 'pet',
    displayName: 'Chỗ chơi cho pet',
    icon: 'assets/utilities/ic-pet.svg',
  },

];

export const SORTER = [
  {
    type: 'Nhận xét mới nhất',
    orderBy: 'newest'
  },
  {
    type: 'Nhận xét cũ nhất',
    orderBy: 'oldest'
  },
  {
    type: 'Đánh giá cao nhất',
    orderBy: 'highest'
  },
  {
    type: 'Đánh giá thấp nhất',
    orderBy: 'lowest'
  },
];

export const WEEKDAY_CAPTIONS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];