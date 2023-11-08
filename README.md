# React + Vite

---

პროექტი შექმნილია react.js საშუალებით და css-სთვის გამოყენებულლია styled components.

- პროექტი დასტარტილია vite-ით, იმისათვის რომ ლოკალურად გაუშვა პროექტი,
  გადმოიწერე გითჰაბიდან, გაუშვი npm install და npm run dev ბრძანება.

დიზაინი არ არის რესპონსიული და აწყობილია დესკტოპ ვერსია მხოლოდ 1920x1080.

როგორც მითითებული იყო აპლიკაცია შედგება შემდეგი გვერდებისაგან: Landing,
ავტორიზაცია,
Form გვერდი,
API გვერდი
გვერიდან გვერდძე გადასასვლელად ვიყენებ react router dom-ს.

თავდაპირველად როცა ვხსნით შევდივართ ლანდინგ გვერძე და get started ღილაკზე დაჭერით გადავდივართ
ავტორიზაციის გვერძე.
ამ გვერძე ვავსებთ ფორმას, ვტვირთავთ სურათს და სახელის ველში შეგვყავს სახელი
(სახელზე რაიმე შეზღუდვა არა,) აუცილებელია ამ ველების შევსება რათა sign in ღილაკით გავაგრძელოთ და გადავიდეთ
ფორმ გვერძე.
ფორმ გვერძე გამოჩნდება: ჰიდერი-სადაც Api ღილაკიდან გადავალთ Api გვერძე, და ავატარის სურათი რომელზე
დაწერით გამოდის პოპაფ ფანჯარა.
ხოლო მეინნაწილში გამჩნდება სტუდენტების შესახებ ინფორმაცია და ფილტრის მეშვეობით მოვახდენთ მანიპულაციას.

- იმითვის რომ ინფორმაცია გამოჩნდეს ჩხრილში, ფილტრის სქესიდან და სტატუსის ოფშენებიდან თითო მაინც უნდა იყოს არჩეული. მაგ:
  მამრობითი და აქტიური.

სტრუქტურა:
src:
assets:
images
student.json - აქ მოთავსებულია ინფორმაცია სტდენტებზე რომელსაც გამოსახავს ფორმ გვერძე
components:
Filter -კომპონენტი ფილტრი რომელიც ფილტრავს სტუდენტის დათას სქესისა და სტატუსის მიხედვით
Popup

             Table - კომპონენტი რომეშიც რენდერდებს სტუდენტების ინფო ცხრილის სახით

layouts:
Header
pages:
ApiPage
Form
Landing
Registration
svg
App.jsx
main.jsx

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
