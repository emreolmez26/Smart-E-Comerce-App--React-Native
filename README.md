# Smart E-Commerce App - React Native

Modern ve kullanıcı dostu bir mobil e-ticaret platformu. React Native ve Expo kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Kullanıcı Kimlik Doğrulama**: Sign In ve Sign Up ekranları
- **Güvenli Navigasyon**: React Navigation ile stack ve bottom tab navigasyonu
- **Özel Bileşenler**: Yeniden kullanılabilir UI bileşenleri
- **Responsive Tasarım**: react-native-size-matters ile farklı ekran boyutlarına uyum
- **Safe Area Yönetimi**: iOS ve Android için optimize edilmiş görünüm
- **Flash Mesajlar**: Kullanıcı bildirimleri için react-native-flash-message
- **TypeScript**: Tip güvenliği ve daha iyi geliştirme deneyimi

## 📱 Ekranlar

- **Authentication**
  - Sign In Screen
  - Sign Up Screen
- **Ana Uygulama**
  - Home Screen
  - Cart Screen
  - Settings Screen

## 🛠️ Teknolojiler

- **React Native** - Mobil uygulama framework'ü
- **Expo** - Geliştirme ve build platformu
- **TypeScript** - Statik tip denetimi
- **React Navigation** - Navigasyon yönetimi
- **React Native Safe Area Context** - Safe area yönetimi
- **React Native Size Matters** - Responsive tasarım
- **React Native Flash Message** - Bildirim sistemi
- **React Native Gesture Handler** - Gesture yönetimi

## 📦 Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/emreolmez26/Smart-E-Comerce-App--React-Native.git

# Proje dizinine gidin
cd Smart-E-Comerce-App--React-Native

# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm start
```

## 🏃‍♂️ Çalıştırma

```bash
# Expo geliştirme sunucusunu başlat
npm start

# iOS Simulator'da çalıştır (macOS gereklidir)
npm run ios

# Android Emulator'da çalıştır
npm run android

# Web'de çalıştır
npm run web
```

## 📂 Proje Yapısı

```
smartECommerce/
├── src/
│   ├── components/
│   │   ├── buttons/      # AppButton
│   │   ├── inputs/       # AppTextInput
│   │   ├── texts/        # AppText
│   │   └── views/        # AppSaveView
│   ├── navigation/       # Navigasyon yapılandırması
│   ├── screens/
│   │   ├── auth/         # Kimlik doğrulama ekranları
│   │   ├── cart/         # Sepet ekranı
│   │   ├── home/         # Ana sayfa
│   │   └── settings/     # Ayarlar
│   ├── styles/           # Renkler ve tema
│   ├── constants/        # Sabit değerler
│   ├── helpers/          # Yardımcı fonksiyonlar
│   ├── hooks/            # Custom hooks
│   ├── store/            # State yönetimi
│   └── types/            # TypeScript tipleri
├── assets/               # Görseller ve fontlar
├── App.tsx              # Ana uygulama dosyası
└── package.json         # Proje bağımlılıkları
```

## 🎨 Özel Bileşenler

### AppButton
Özelleştirilebilir buton bileşeni
```tsx
<AppButton 
  title="Sign In" 
  onPress={() => {}} 
  backgroundColor="#000"
  textColor="#fff"
/>
```

### AppTextInput
Stil sahibi input bileşeni
```tsx
<AppTextInput 
  placeholder="Email" 
  onChangeText={setEmail}
  secureTextEntry
/>
```

### AppText
Tutarlı tipografi için text bileşeni
```tsx
<AppText variant="bold">Başlık</AppText>
<AppText variant="medium">İçerik</AppText>
```

### AppSaveView
Safe area yönetimi ile container
```tsx
<AppSaveView style={styles.container}>
  {children}
</AppSaveView>
```

## 🔧 Geliştirme

Bu proje aktif geliştirme aşamasındadır. Yakında eklenecek özellikler:

- [ ] Ürün listeleme ve detay sayfaları
- [ ] Sepet yönetimi
- [ ] Ödeme entegrasyonu
- [ ] Kullanıcı profili
- [ ] Sipariş geçmişi
- [ ] Favori ürünler
- [ ] Arama ve filtreleme

## 📄 Lisans

MIT

## 👨‍💻 Geliştirici

**Emre Ölmez**
- GitHub: [@emreolmez26](https://github.com/emreolmez26)

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Pull request'ler için:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
