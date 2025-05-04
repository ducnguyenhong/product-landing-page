export const MOBILE_NETWORK = [
  {
    name: 'Viettel',
    code: 'VIETTEL',
    prefixes: ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039']
  },
  {
    name: 'Vinaphone',
    code: 'VINAPHONE',
    prefixes: ['088', '091', '094', '081', '082', '083', '084', '085']
  },
  {
    name: 'Mobifone',
    code: 'MOBIFONE',
    prefixes: ['089', '090', '093', '070', '076', '077', '078', '079']
  },
  {
    name: 'Vietnamobile',
    code: 'VIETNAMOBILE',
    prefixes: ['092', '056', '058']
  },
  {
    name: 'Gmobile',
    code: 'GMOBILE',
    prefixes: ['099', '059']
  }
];

export const PRODUCT_LIST = [
  {
    id: 'quat-tich-dien',
    name: 'Quạt tích điện để bàn - Làm mát nhanh - Pin sử dụng nhiều giờ',
    shortName: 'Quạt tích điện',
    description:
      'Quạt tích điện là một thiết bị gia dụng tiện lợi, giúp làm mát không khí trong những ngày hè oi ả. Với thiết kế nhỏ gọn, dễ dàng di chuyển và sử dụng, quạt tích điện trở thành người bạn đồng hành lý tưởng cho mọi gia đình.',
    originalPrice: 600000, // giá gốc
    price: 299000, // giá sau khi giảm (giá chính)
    quantitySold: 1407, // số sản phẩm đã bán
    remainingQuantity: 14, // số sản phẩm còn lại
    discount: '50%', // phần trăm giảm giá
    viewing: 92, // số lượng người đang xem
    videoYoutube: 'https://www.youtube.com/embed/nFpCx6Lgi0k', // link nhúng video youtube

    images: [
      '/images/products/quat-tich-dien-1.jpg',
      '/images/products/quat-tich-dien-1.webp',
      '/images/products/quat-tich-dien-1.jpg',
      '/images/products/quat-tich-dien-1.webp',
      '/images/products/quat-tich-dien-1.jpg'
    ],

    numOfReview: 461, // số lượng đánh giá
    reviews: [
      {
        comment: 'Sản phẩm rất tốt, làm mát nhanh chóng và êm ái. Tôi rất hài lòng với quạt tích điện này',
        avatar: '/images/reviews/user-1.webp',
        fullName: 'Lê Thị Hoà'
      },
      {
        comment: 'Quạt chạy êm, nhưng hơi nặng một chút. Tuy nhiên, tôi vẫn rất thích sản phẩm này',
        avatar: '/images/reviews/user-2.webp',
        fullName: 'Hoa Nguyễn'
      },
      {
        comment: 'Thiết kế đẹp, dễ sử dụng và tiết kiệm điện. Tôi sẽ giới thiệu cho bạn bè',
        avatar: '/images/reviews/user-3.webp',
        fullName: 'Trần Thuỳ Linh'
      },
      {
        comment: 'Quạt tích điện này rất tiện lợi, tôi có thể mang theo khi đi du lịch hoặc cắm trại',
        avatar: '/images/reviews/user-4.webp',
        fullName: 'Nguyễn Khánh Huyền'
      },
      {
        comment: 'Sản phẩm chất lượng, giá cả hợp lý. Tôi rất hài lòng với sự lựa chọn này',
        avatar: '/images/reviews/user-5.webp',
        fullName: 'Nguyễn Dung'
      }
    ],
    content: `<section>
  <h2>🌀 Quạt Tích Điện Đa Năng - Giải Pháp Mát Mẻ Mọi Lúc, Mọi Nơi!</h2>
  
  <ul>
    <li><strong>Xuất xứ:</strong> Chính hãng Việt Nam, sản xuất theo tiêu chuẩn chất lượng cao.</li>
    
        <li><strong>Công suất:</strong> 15W – tiết kiệm điện, hoạt động êm ái</li>
        <li><strong>Dung lượng pin:</strong> Lithium 12V – 4000mAh</li>
        <li><strong>Thời gian sử dụng:</strong> 4 – 10 giờ tùy mức gió</li>
        <li><strong>Thời gian sạc:</strong> Khoảng 4 giờ để đầy pin</li>
        <li><strong>Cổng sạc:</strong> DC 12V, hỗ trợ sạc qua nguồn điện hoặc pin năng lượng mặt trời</li>
        <li><strong>Hỗ trợ sạc thiết bị:</strong> Cổng USB 5V – sạc điện thoại, đèn mini...</li>

    <li><strong>Thiết kế & Kích thước:</strong>
      <ul>
        <li>Kích thước: 25cm x 20cm x 12cm</li>
        <li>Trọng lượng: 1.2kg – dễ dàng mang theo</li>
        <li>Chất liệu: Nhựa ABS cao cấp – bền, chống va đập</li>
        <li>Màu sắc: Trắng, Xanh ngọc, Đen</li>
        <li>Kiểu dáng: Quạt bàn kiêm treo tường, tay cầm tiện dụng</li>
      </ul>
    </li>

    <li><strong>Tính năng nổi bật:</strong>
      <ul>
        <li>3 mức tốc độ gió: nhẹ, vừa, mạnh</li>
        <li>3 cánh quạt lớn cho luồng gió rộng và êm</li>
        <li>Tích hợp đèn LED chiếu sáng – tiện lợi khi mất điện</li>
        <li>Chế độ xoay linh hoạt – làm mát không gian rộng</li>
        <li>Tự động ngắt khi sạc đầy – an toàn và bảo vệ pin</li>
      </ul>
    </li>

    <li><strong>An toàn & Tiện ích:</strong>
      <ul>
        <li>Có mạch bảo vệ quá tải, quá nhiệt</li>
        <li>Hoạt động êm ái, không gây tiếng ồn</li>
        <li>Phù hợp dùng trong gia đình, ký túc xá, văn phòng, cắm trại...</li>
      </ul>
    </li>
  </ul>

  <p>📦 Bảo hành chính hãng 12 tháng – Giao hàng toàn quốc – Hỗ trợ đổi trả trong 7 ngày</p>
</section>
`
  },
  {
    id: 'quat-dieu-hoa',
    name: 'Quạt điều hoà phun sương, có đèn led, hẹn giờ',
    shortName: 'Quạt điều hoà',
    description:
      'Quạt tích điện là một thiết bị gia dụng tiện lợi, giúp làm mát không khí trong những ngày hè oi ả. Với thiết kế nhỏ gọn, dễ dàng di chuyển và sử dụng, quạt tích điện trở thành người bạn đồng hành lý tưởng cho mọi gia đình.',
    originalPrice: 600000, // giá gốc
    price: 299000, // giá sau khi giảm (giá chính)
    quantitySold: 1407, // số sản phẩm đã bán
    remainingQuantity: 14, // số sản phẩm còn lại
    discount: '50%', // phần trăm giảm giá
    viewing: 92, // số lượng người đang xem
    videoYoutube: 'https://www.youtube.com/embed/nFpCx6Lgi0k', // link nhúng video youtube

    images: [
      '/images/products/quat-tich-dien-1.jpg',
      '/images/products/quat-tich-dien-1.webp',
      '/images/products/quat-tich-dien-1.jpg',
      '/images/products/quat-tich-dien-1.webp',
      '/images/products/quat-tich-dien-1.jpg'
    ],

    numOfReview: 461, // số lượng đánh giá
    reviews: [
      {
        comment: 'Sản phẩm rất tốt, làm mát nhanh chóng và êm ái. Tôi rất hài lòng với quạt tích điện này',
        avatar: '/images/reviews/user-1.webp',
        fullName: 'Lê Thị Hoà'
      },
      {
        comment: 'Quạt chạy êm, nhưng hơi nặng một chút. Tuy nhiên, tôi vẫn rất thích sản phẩm này',
        avatar: '/images/reviews/user-2.webp',
        fullName: 'Hoa Nguyễn'
      },
      {
        comment: 'Thiết kế đẹp, dễ sử dụng và tiết kiệm điện. Tôi sẽ giới thiệu cho bạn bè',
        avatar: '/images/reviews/user-3.webp',
        fullName: 'Trần Thuỳ Linh'
      },
      {
        comment: 'Quạt tích điện này rất tiện lợi, tôi có thể mang theo khi đi du lịch hoặc cắm trại',
        avatar: '/images/reviews/user-4.webp',
        fullName: 'Nguyễn Khánh Huyền'
      },
      {
        comment: 'Sản phẩm chất lượng, giá cả hợp lý. Tôi rất hài lòng với sự lựa chọn này',
        avatar: '/images/reviews/user-5.webp',
        fullName: 'Nguyễn Dung'
      }
    ],
    content: `<section>
  <h2>🌀 Quạt Tích Điện Đa Năng - Giải Pháp Mát Mẻ Mọi Lúc, Mọi Nơi!</h2>
  
  <ul>
    <li><strong>Xuất xứ:</strong> Chính hãng Việt Nam, sản xuất theo tiêu chuẩn chất lượng cao.</li>
    
        <li><strong>Công suất:</strong> 15W – tiết kiệm điện, hoạt động êm ái</li>
        <li><strong>Dung lượng pin:</strong> Lithium 12V – 4000mAh</li>
        <li><strong>Thời gian sử dụng:</strong> 4 – 10 giờ tùy mức gió</li>
        <li><strong>Thời gian sạc:</strong> Khoảng 4 giờ để đầy pin</li>
        <li><strong>Cổng sạc:</strong> DC 12V, hỗ trợ sạc qua nguồn điện hoặc pin năng lượng mặt trời</li>
        <li><strong>Hỗ trợ sạc thiết bị:</strong> Cổng USB 5V – sạc điện thoại, đèn mini...</li>

    <li><strong>Thiết kế & Kích thước:</strong>
      <ul>
        <li>Kích thước: 25cm x 20cm x 12cm</li>
        <li>Trọng lượng: 1.2kg – dễ dàng mang theo</li>
        <li>Chất liệu: Nhựa ABS cao cấp – bền, chống va đập</li>
        <li>Màu sắc: Trắng, Xanh ngọc, Đen</li>
        <li>Kiểu dáng: Quạt bàn kiêm treo tường, tay cầm tiện dụng</li>
      </ul>
    </li>

    <li><strong>Tính năng nổi bật:</strong>
      <ul>
        <li>3 mức tốc độ gió: nhẹ, vừa, mạnh</li>
        <li>3 cánh quạt lớn cho luồng gió rộng và êm</li>
        <li>Tích hợp đèn LED chiếu sáng – tiện lợi khi mất điện</li>
        <li>Chế độ xoay linh hoạt – làm mát không gian rộng</li>
        <li>Tự động ngắt khi sạc đầy – an toàn và bảo vệ pin</li>
      </ul>
    </li>

    <li><strong>An toàn & Tiện ích:</strong>
      <ul>
        <li>Có mạch bảo vệ quá tải, quá nhiệt</li>
        <li>Hoạt động êm ái, không gây tiếng ồn</li>
        <li>Phù hợp dùng trong gia đình, ký túc xá, văn phòng, cắm trại...</li>
      </ul>
    </li>
  </ul>

  <p>📦 Bảo hành chính hãng 12 tháng – Giao hàng toàn quốc – Hỗ trợ đổi trả trong 7 ngày</p>
</section>
`
  },
  {
    id: 'ao-chong-nang',
    name: 'Áo chống nắng nam nữ 2 lớp - chống tia UV - thấm hút mồ hôi',
    shortName: 'Áo chống nắng',
    description:
      'Quạt tích điện là một thiết bị gia dụng tiện lợi, giúp làm mát không khí trong những ngày hè oi ả. Với thiết kế nhỏ gọn, dễ dàng di chuyển và sử dụng, quạt tích điện trở thành người bạn đồng hành lý tưởng cho mọi gia đình.',
    originalPrice: 600000, // giá gốc
    price: 299000, // giá sau khi giảm (giá chính)
    quantitySold: 1407, // số sản phẩm đã bán
    remainingQuantity: 14, // số sản phẩm còn lại
    discount: '50%', // phần trăm giảm giá
    viewing: 92, // số lượng người đang xem
    videoYoutube: 'https://www.youtube.com/embed/nFpCx6Lgi0k', // link nhúng video youtube

    images: [
      '/images/products/quat-tich-dien-1.jpg',
      '/images/products/quat-tich-dien-1.webp',
      '/images/products/quat-tich-dien-1.jpg',
      '/images/products/quat-tich-dien-1.webp',
      '/images/products/quat-tich-dien-1.jpg'
    ],

    numOfReview: 461, // số lượng đánh giá
    reviews: [
      {
        comment: 'Sản phẩm rất tốt, làm mát nhanh chóng và êm ái. Tôi rất hài lòng với quạt tích điện này',
        avatar: '/images/reviews/user-1.webp',
        fullName: 'Lê Thị Hoà'
      },
      {
        comment: 'Quạt chạy êm, nhưng hơi nặng một chút. Tuy nhiên, tôi vẫn rất thích sản phẩm này',
        avatar: '/images/reviews/user-2.webp',
        fullName: 'Hoa Nguyễn'
      },
      {
        comment: 'Thiết kế đẹp, dễ sử dụng và tiết kiệm điện. Tôi sẽ giới thiệu cho bạn bè',
        avatar: '/images/reviews/user-3.webp',
        fullName: 'Trần Thuỳ Linh'
      },
      {
        comment: 'Quạt tích điện này rất tiện lợi, tôi có thể mang theo khi đi du lịch hoặc cắm trại',
        avatar: '/images/reviews/user-4.webp',
        fullName: 'Nguyễn Khánh Huyền'
      },
      {
        comment: 'Sản phẩm chất lượng, giá cả hợp lý. Tôi rất hài lòng với sự lựa chọn này',
        avatar: '/images/reviews/user-5.webp',
        fullName: 'Nguyễn Dung'
      }
    ],
    content: `<section>
  <h2>🌀 Quạt Tích Điện Đa Năng - Giải Pháp Mát Mẻ Mọi Lúc, Mọi Nơi!</h2>
  
  <ul>
    <li><strong>Xuất xứ:</strong> Chính hãng Việt Nam, sản xuất theo tiêu chuẩn chất lượng cao.</li>
    
        <li><strong>Công suất:</strong> 15W – tiết kiệm điện, hoạt động êm ái</li>
        <li><strong>Dung lượng pin:</strong> Lithium 12V – 4000mAh</li>
        <li><strong>Thời gian sử dụng:</strong> 4 – 10 giờ tùy mức gió</li>
        <li><strong>Thời gian sạc:</strong> Khoảng 4 giờ để đầy pin</li>
        <li><strong>Cổng sạc:</strong> DC 12V, hỗ trợ sạc qua nguồn điện hoặc pin năng lượng mặt trời</li>
        <li><strong>Hỗ trợ sạc thiết bị:</strong> Cổng USB 5V – sạc điện thoại, đèn mini...</li>

    <li><strong>Thiết kế & Kích thước:</strong>
      <ul>
        <li>Kích thước: 25cm x 20cm x 12cm</li>
        <li>Trọng lượng: 1.2kg – dễ dàng mang theo</li>
        <li>Chất liệu: Nhựa ABS cao cấp – bền, chống va đập</li>
        <li>Màu sắc: Trắng, Xanh ngọc, Đen</li>
        <li>Kiểu dáng: Quạt bàn kiêm treo tường, tay cầm tiện dụng</li>
      </ul>
    </li>

    <li><strong>Tính năng nổi bật:</strong>
      <ul>
        <li>3 mức tốc độ gió: nhẹ, vừa, mạnh</li>
        <li>3 cánh quạt lớn cho luồng gió rộng và êm</li>
        <li>Tích hợp đèn LED chiếu sáng – tiện lợi khi mất điện</li>
        <li>Chế độ xoay linh hoạt – làm mát không gian rộng</li>
        <li>Tự động ngắt khi sạc đầy – an toàn và bảo vệ pin</li>
      </ul>
    </li>

    <li><strong>An toàn & Tiện ích:</strong>
      <ul>
        <li>Có mạch bảo vệ quá tải, quá nhiệt</li>
        <li>Hoạt động êm ái, không gây tiếng ồn</li>
        <li>Phù hợp dùng trong gia đình, ký túc xá, văn phòng, cắm trại...</li>
      </ul>
    </li>
  </ul>

  <p>📦 Bảo hành chính hãng 12 tháng – Giao hàng toàn quốc – Hỗ trợ đổi trả trong 7 ngày</p>
</section>
`
  }
];
