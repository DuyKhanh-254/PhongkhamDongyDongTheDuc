import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";
import service6 from "@/assets/service-6.jpg";
import doctor1 from "@/assets/doctor-1.png";
import doctor2 from "@/assets/doctor-2.png";
import doctor3 from "@/assets/doctor-3.png";
import doctor4 from "@/assets/doctor-4.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.jpg";
import intro1 from "@/assets/intro-1.jpg";
import intro2 from "@/assets/intro-2.jpg";
import intro3 from "@/assets/intro-3.jpg";
import intro4 from "@/assets/intro-4.jpg";
import cs1 from "@/assets/cs1.jpg";
import cs2 from "@/assets/cs2.jpg";
import cs3 from "@/assets/cs3.jpg";

export const clinicInfo = {
  name: "Phòng Khám Đông Y Sơn - Thế - Đức",
  shortName: "Sơn Thế Đức",
  phone: "0944 564 078",
  email: "service@sontheduc.vn",
  address: "Số 17, ngõ 182 đường Đình Thôn, Từ Liêm, Hà Nội",
  workingHours: "Thứ 2 - Thứ 7: 8:00 - 17:30 | Chủ nhật: 8:00 - 12:00",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.1001026521429!2d105.77228276962126!3d21.0166587506789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454a84bf44c0b%3A0xb677d78dabe40220!2zMTcgTmcuIDE4MiDEkC4gxJDDrG5oIFRow7RuLCBN4bu5IMSQw6xuaCwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1775042993374!5m2!1sen!2s",
  description:
    "Phòng khám Đông y Sơn - Thế - Đức chuyên điều trị các bệnh lý bằng phương pháp y học cổ truyền kết hợp hiện đại. Với đội ngũ bác sĩ giàu kinh nghiệm và phác đồ cá nhân hóa, chúng tôi cam kết mang đến hiệu quả điều trị tối ưu cho mỗi bệnh nhân.",
};

export const services = [
  {
    id: "kham-tu-van",
    title: "Khám, tư vấn Y học cổ truyền",
    description: "Chẩn đoán chính xác theo Đông y, xây dựng phác đồ điều trị phù hợp từng bệnh nhân.",
    image: service1,
  },
  {
    id: "cham-cuu",
    title: "Châm cứu trị liệu",
    description: "Giảm đau nhanh, lưu thông khí huyết, hiệu quả với xương khớp và mất ngủ.",
    image: service2,
  },
  {
    id: "xoa-bop-bam-huyet",
    title: "Xoa bóp – bấm huyệt",
    description: "Giãn cơ, giảm đau, cải thiện vận động cho cổ vai gáy, đau lưng, tê bì.",
    image: service3,
  },
  {
    id: "vat-ly-tri-lieu",
    title: "Vật lý trị liệu, phục hồi chức năng",
    description: "Hỗ trợ phục hồi vận động, cải thiện chức năng cơ xương khớp.",
    image: service4,
  },
  {
    id: "ke-don-thuoc",
    title: "Kê đơn thang thuốc - sắc thuốc",
    description: "Điều trị từ gốc bằng thảo dược, phù hợp bệnh mạn tính.",
    image: service5,
  },
  {
    id: "dieu-tri-khong-dung-thuoc",
    title: "Điều trị không dùng thuốc",
    description: "Dưỡng sinh, khí công giúp tăng sức khỏe và phòng bệnh lâu dài.",
    image: service6,
  },
];

export const doctors = [
  {
    id: 1,
    name: "Phạm Văn Trịnh",
    title: "Phó giáo sư, Bác sỹ",
    description: "Nguyên phó trưởng bộ môn Y học cổ truyền, Đại học Y Hà Nội",
    image: doctor1,
  },
  {
    id: 2,
    name: "Nguyễn Xuân Sơn",
    title: "Thạc sỹ, Bác sỹ",
    description: "Nguyên trưởng khoa Nghiên chất, khoa Y học cổ truyền, chuyên gia tại Mexico của Viện châm cứu TW",
    image: doctor2,
  },
  {
    id: 3,
    name: "Nguyễn Văn Thế",
    title: "Bác sỹ chuyên khoa II, Thạc sỹ",
    description: "Trưởng khoa Hô hấp, da liễu, tim mạch, rối loạn chuyển hóa, phụ trách trung tâm quốc tế Việt Xuân, đơn vị chống đau và chăm sóc giảm nhẹ",
    image: doctor3,
  },
  {
    id: 4,
    name: "Phan Minh Đức",
    title: "Tiến sỹ, Bác sỹ",
    description: "Phó trưởng bộ môn liên chuyên khoa nội - y học cổ truyền trường Đại học y dược - Đại học Quốc gia Hà Nội",
    image: doctor4,
  },
];

export const articles = [
  {
    id: 1,
    slug: "dau-co-vai-gay-nguyen-nhan-va-cach-dieu-tri",
    title: "Đau cổ vai gáy: Nguyên nhân và cách điều trị bằng Đông y",
    excerpt:
      "Đau cổ vai gáy là tình trạng phổ biến ở dân văn phòng. Tìm hiểu nguyên nhân và phương pháp điều trị hiệu quả bằng Đông y.",
    content: `Đau cổ vai gáy là một trong những bệnh lý cơ xương khớp phổ biến nhất hiện nay, đặc biệt ở những người làm việc văn phòng, ngồi nhiều trước máy tính.

## Nguyên nhân gây đau cổ vai gáy

- Tư thế ngồi làm việc sai
- Thoái hóa đốt sống cổ
- Stress và căng thẳng kéo dài
- Thiếu vận động

## Điều trị bằng Đông y

Phòng khám Sơn Thế Đức áp dụng phác đồ điều trị kết hợp:
1. Châm cứu các huyệt vùng cổ vai gáy
2. Xoa bóp bấm huyệt thư giãn cơ
3. Thuốc Đông y bổ can thận, hoạt huyết
4. Hướng dẫn bài tập phục hồi tại nhà

Hầu hết bệnh nhân cảm nhận giảm đau rõ rệt sau 1-3 buổi điều trị.`,
    image: service1,
    date: "2026-03-25",
    category: "Kiến thức",
  },
  {
    id: 2,
    slug: "mat-ngu-keo-dai-giai-phap-dong-y",
    title: "Mất ngủ kéo dài? Giải pháp từ Đông y không dùng thuốc Tây",
    excerpt:
      "Mất ngủ ảnh hưởng nghiêm trọng đến sức khỏe. Khám phá cách Đông y giúp bạn ngủ ngon tự nhiên.",
    content: `Mất ngủ kéo dài không chỉ gây mệt mỏi mà còn ảnh hưởng đến tim mạch, thần kinh và hệ miễn dịch.

## Quan điểm Đông y về mất ngủ

Theo Đông y, mất ngủ thường do:
- Tâm tỳ hư
- Can hỏa vượng
- Thận âm hư

## Phương pháp điều trị

- Châm cứu các huyệt An thần, Nội quan, Thần môn
- Bài thuốc dưỡng tâm an thần
- Cứu ngải bổ khí huyết
- Hướng dẫn dưỡng sinh buổi tối`,
    image: service5,
    date: "2026-03-20",
    category: "Kiến thức",
  },
  {
    id: 3,
    slug: "than-kinh-toa-dieu-tri-khong-phau-thuat",
    title: "Thần kinh tọa: Điều trị không phẫu thuật bằng châm cứu",
    excerpt:
      "Đau thần kinh tọa gây khó chịu và hạn chế vận động. Châm cứu là giải pháp an toàn và hiệu quả.",
    content: `Đau thần kinh tọa là tình trạng đau dọc theo đường đi của dây thần kinh tọa, từ lưng dưới xuống chân.

## Triệu chứng

- Đau từ thắt lưng lan xuống mông và chân
- Tê bì, kiến bò ở chân
- Yếu cơ chân

## Điều trị châm cứu

Châm cứu đã được WHO công nhận là phương pháp hiệu quả trong điều trị đau thần kinh tọa. Tại phòng khám Sơn Thế Đức, chúng tôi kết hợp châm cứu với điện châm và thuốc Đông y để đạt hiệu quả tối ưu.`,
    image: service3,
    date: "2026-03-15",
    category: "Tin tức",
  },
  {
    id: 4,
    slug: "loi-ich-cua-giac-hoi",
    title: "5 lợi ích tuyệt vời của giác hơi đối với sức khỏe",
    excerpt:
      "Giác hơi là phương pháp trị liệu cổ truyền mang lại nhiều lợi ích cho sức khỏe.",
    content: `Giác hơi (cupping) là phương pháp trị liệu có lịch sử hàng nghìn năm trong y học cổ truyền.

## 5 lợi ích chính

1. **Giảm đau hiệu quả**: Giúp giảm đau cơ, đau khớp nhanh chóng
2. **Lưu thông khí huyết**: Tăng cường tuần hoàn máu
3. **Giải độc cơ thể**: Đào thải độc tố qua da
4. **Thư giãn cơ bắp**: Giảm co cứng cơ
5. **Tăng miễn dịch**: Kích thích hệ miễn dịch hoạt động tốt hơn`,
    image: service3,
    date: "2026-03-10",
    category: "Kiến thức",
  },
  {
    id: 5,
    slug: "dong-y-dieu-tri-viem-khop",
    title: "Đông y điều trị viêm khớp: An toàn và bền vững",
    excerpt:
      "Viêm khớp có thể được kiểm soát hiệu quả bằng Đông y mà không cần phụ thuộc thuốc Tây.",
    content: `Viêm khớp là bệnh lý phổ biến ở người trung niên và cao tuổi. Đông y cung cấp giải pháp điều trị toàn diện.

## Phương pháp Đông y

- Thuốc sắc trừ phong thấp, bổ can thận
- Châm cứu giảm đau và phục hồi khớp
- Xoa bóp bấm huyệt
- Ngâm chân thuốc Bắc`,
    image: service2,
    date: "2026-03-05",
    category: "Tin tức",
  },
  {
    id: 6,
    slug: "phong-kham-khai-truong-co-so-moi",
    title: "Phòng khám Sơn Thế Đức mở rộng cơ sở mới",
    excerpt:
      "Nhằm đáp ứng nhu cầu khám chữa bệnh ngày càng tăng, phòng khám chính thức mở rộng cơ sở.",
    content: `Phòng khám Đông y Sơn Thế Đức vui mừng thông báo việc mở rộng cơ sở mới với trang thiết bị hiện đại.

## Cơ sở mới có gì?

- Phòng khám và điều trị rộng rãi hơn
- Trang thiết bị hiện đại
- Khu vực chờ thoải mái
- Bãi đỗ xe thuận tiện

Địa chỉ: Số 17, ngõ 182 đường Đình Thôn, Từ Liêm, Hà Nội`,
    image: gallery1,
    date: "2026-02-28",
    category: "Tin tức",
  },
];

export const galleryImages = [
  { id: 1, src: gallery1, alt: "Mặt tiền phòng khám" },
  { id: 2, src: gallery2, alt: "Khu vực chờ" },
  { id: 3, src: gallery3, alt: "Kho thuốc Đông y" },
  { id: 4, src: gallery4, alt: "Phòng điều trị" },
  { id: 5, src: gallery5, alt: "Bác sĩ khám bệnh" },
  { id: 6, src: gallery6, alt: "Đội ngũ y bác sĩ" },
];

export const commonDiseases = [
  "Đau cổ vai gáy",
  "Thoái hóa cột sống",
  "Thần kinh tọa",
  "Mất ngủ",
  "Viêm khớp",
  "Đau đầu - Migraine",
  "Liệt dây thần kinh",
  "Rối loạn tiêu hóa",
];

export const testimonials = [
  {
    id: 1,
    quote: '"Tôi bị đau vai gáy nhiều năm, sau 5 buổi điều trị đã giảm rõ."',
    author: "Bệnh nhân Nguyễn Văn H",
    avatar: gallery6,
  },
  {
    id: 2,
    quote: '"Tôi bị đau vai gáy nhiều năm, sau 5 buổi điều trị đã giảm rõ."',
    author: "Bệnh nhân Nguyễn Văn H",
    avatar: gallery6,
  },
  {
    id: 3,
    quote: '"Tôi bị đau vai gáy nhiều năm, sau 5 buổi điều trị đã giảm rõ."',
    author: "Bệnh nhân Nguyễn Văn H",
    avatar: gallery6,
  },
];

export const aboutHistoryImage = intro1;

export const certificates = [
  { id: 1, src: intro2, alt: "Giấy phép hoạt động" },
  { id: 2, src: intro3, alt: "Chứng nhận chuyên môn 1" },
  { id: 3, src: intro4, alt: "Chứng nhận chuyên môn 2" },
];

export const facilityImages = [
  { id: 1, src: cs1, alt: "Cơ sở vật chất 1" },
  { id: 2, src: cs2, alt: "Cơ sở vật chất 2" },
  { id: 3, src: cs3, alt: "Cơ sở vật chất 3" },
];
