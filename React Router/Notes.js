/*
Lazy Loading is the process in whichw e load a very huge page in parts to improve performnace and reduce load time

Comment out import statement in App.js
import About from './components/About'

Write export default About at bottom of About.js
dont write export default function About(){}

change import statement
const LazyAbout =React.lazy(()=>import('./components/About'))

Change Route Component
<Route path='about' element={<LazyAbout />} />

Wrap LazyAbout component with react suspense
<Route path='about' element={<React.Suspense fallback="Loading"><LazyAbout /></React.Suspense>} />
fallback="Loading..."
Loading is dispalyed when the content is loading
*/