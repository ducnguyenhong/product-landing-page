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
    id: 'ao-chong-nang',
    name: 'Áo chống nắng nam nữ 2 lớp - che trán - thoát hơi thấm hút mồ hôi - chống tia UV',
    shortName: 'Áo chống nắng',
    description:
      'Quạt tích điện là một thiết bị gia dụng tiện lợi, giúp làm mát không khí trong những ngày hè oi ả. Với thiết kế nhỏ gọn, dễ dàng di chuyển và sử dụng, quạt tích điện trở thành người bạn đồng hành lý tưởng cho mọi gia đình.',
    originalPrice: 360000, // giá gốc
    price: 179000, // giá sau khi giảm (giá chính)
    quantitySold: 1407, // số sản phẩm đã bán
    remainingQuantity: 142, // số sản phẩm còn lại
    discount: '50%', // phần trăm giảm giá
    viewing: 104, // số lượng người đang xem
    videoYoutube: 'https://www.youtube.com/embed/6ldTdzG-Lhw', // link nhúng video youtube

    images: [
      '/images/products/ao-chong-nang-1.webp',
      '/images/products/ao-chong-nang-2.webp',
      '/images/products/ao-chong-nang-3.webp',
      '/images/products/ao-chong-nang-4.webp',
      '/images/products/ao-chong-nang-5.webp'
    ],

    numOfReview: 461, // số lượng đánh giá,
    sizes: [
      { label: 'Size L: 54-62Kg, dưới 1m70', value: 'L' },
      { label: 'Size XL: 63-75Kg, dưới 1m75', value: 'XL' },
      { label: 'Size 2XL: 76-83Kg, dưới 1m80', value: '2XL' },
      { label: 'Size khác', value: 'OTHER' }
    ],
    reviews: [
      {
        comment: 'Áo đẹp lắm, to rộng, chất 2 lớp dày dặn mặc phối đẹp lắm, giá mình thấy cũng rẻ ổn đáng tiền mua',
        avatar: '/images/reviews/user-1.webp',
        fullName: 'Lê Thị Hoà'
      },
      {
        comment:
          'Hàng đóng gói cẩn thận, chất vải dày, mọi người ai đang tìm mẫu áo nắng cho mùa hè sắp tới thì nên thử mẫu này. Sẽ ủng hộ shop thêm lần sau',
        avatar: '/images/reviews/user-2.webp',
        fullName: 'Hoa Nguyễn'
      },
      {
        comment:
          'Shop tư vấn nhiệt tình, giao hành nhanh. Vải siêu dày và mịn, đặc biệt lần đầu thấy loại áo có lưới thoát hơi vùng dưới tay',
        avatar: '/images/reviews/user-3.webp',
        fullName: 'Trần Thuỳ Linh'
      },
      {
        comment:
          'Chất liệu tốt phong cách hợp với mình ưng quá trời ưng luôn ạ. Mặc che được trán kín mặt chống nắng nhé cả nhà',
        avatar: '/images/reviews/user-4.webp',
        fullName: 'Nguyễn Khánh Huyền'
      },
      {
        comment: 'Rất đáng khi bỏ tiền ra mua hàng nha. Thời gian giao hàng nhanh',
        avatar: '/images/reviews/user-5.webp',
        fullName: 'Nguyễn Dung'
      }
    ],
    content: `<div class="product-description">
  <p><strong>Áo chống nắng 2 lớp, khoác nắng chống tia UV</strong> có lưới tản nhiệt nách và phối sọc tay mẫu mới mùa hè <strong>GiaDungMoi</strong></p>

  <img src="/images/products/ao-chong-nang-1.webp" style="margin: 14px 0px" alt="áo chống nắng" />

  <p>Là sản phẩm chính hãng làm từ chất liệu vải polyester chuyên dụng trong chống nắng giảm đến 5 độ khi đi ngoài nắng, mang lại sự thoáng mát.</p>

  <p>Cho khả năng chống tia UV cực cao lên đến 98%, có khả năng co giãn và thông hơi rất tốt, khi mặc tạo cảm giác thoải mái.</p>

  <img src="/images/products/ao-chong-nang-2.webp" style="margin: 14px 0px" alt="áo chống nắng" />

  <h3>Thiết kế kiểu dáng áo chống nắng thời trang, nam tính và trẻ trung:</h3>
  <ul>
    <li>Kiểu dáng thanh lịch, trẻ trung, phù hợp với chàng trai ở nhiều độ tuổi khác nhau.</li>
    <li>Tinh tế trên từng đường may, tỉ mỉ trên từng chi tiết, áo khoác chống nắng 2 lớp có thiết kế kín đến cả mũi, thay thế khẩu trang.</li>
    <li>Thiết kế 2 lớp là sản phẩm cao cấp, có khả năng chống tia UV bảo vệ làn da khỏi tác hại của tia cực tím.</li>
    <li>Thoải mái tuyệt vời, thư giãn, thoáng mát, không hề bí bách hay nóng nực.</li>
    <li>Có thể kết hợp nhiều phong cách thời trang khác nhau: mặc với quần bò hay quần kaki đều hợp, đem lại cho nam giới sự năng động, cá tính, thể thao và đa năng.</li>
  </ul>

  <img src="/images/products/ao-chong-nang-6.webp" style="margin: 14px 0px" alt="áo chống nắng" />

  <h3>Các chi tiết áo nắng nam được hoàn thiện tỉ mỉ, tiện dụng:</h3>
  <ul>
    <li>Đầy đủ tem mác chính hãng.</li>
    <li>2 túi ngoài áo có khóa kéo, kèm theo túi trong có khóa gián tiện lợi và kín đáo.</li>
    <li>Mũ áo trùm kín, khóa kéo cao thay khẩu trang.</li>
    <li>Lưới tản nhiệt 2 bên sườn áo giúp thông hơi, giảm đến 5 độ khi mặc ngoài trời nắng.</li>
    <li>Thiết kế tay xỏ một nấc, tiện lợi khi điều khiển phương tiện giao thông.</li>
    <li>Cổ áo thiết kế cao có thể kéo lên thay khẩu trang.</li>
    <li>Bảo vệ toàn diện khi mặc áo chống nắng 2 lớp này.</li>
  </ul>

  <h3 style="margin-top: 24px">► BẢNG CHỌN SIZE</h3>
  <ul>
    <li>Size M: 45-53Kg, chiều cao dưới 1m62</li>
    <li>Size L: 54-62Kg, dưới 1m70</li>
    <li>Size XL: 63-75Kg, dưới 1m75</li>
    <li>Size 2XL: 76-83Kg, dưới 1m80</li>
    <li>Size 3XL: 84-100Kg, dưới 1m85</li>
  </ul>

  <h3 style="margin-top: 24px">► <b>GiaDungMoi</b> CAM KẾT</h3>
  <ul>
    <li>Sản phẩm áo chống nắng 2 lớp có form như mô tả.</li>
    <li>Đảm bảo chất lượng vải thun lạnh co giãn và thoáng khí.</li>
    <li>Áo được kiểm tra kỹ càng, cẩn thận trước khi gói hàng.</li>
    <li>Sản phẩm luôn có sẵn, giao hàng ngay khi nhận được đơn.</li>
  </ul>
</div>
`
  }
];
