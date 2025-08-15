import { Routes, Route } from "react-router";
import { Home } from './pages/Home'
import { ProjectXP } from './pages/ProjetoXP'
import { CopaFeminina } from './pages/CopaFeminina23'
import { CopaProject } from './pages/Copa2022'
import { ArsenalProject } from './pages/ProjetoArsenal'
import { BlokeBaile } from './pages/BlokeBaile'
import { MellowProject } from './pages/ProjetoMellow'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/projeto-xp" element={<ProjectXP />} />
      <Route path="/projeto-copaFeminina2023" element={<CopaFeminina />} />
      <Route path="/projeto-copa2022" element={<CopaProject />} />
      <Route path="/projeto-arsenal" element={<ArsenalProject />} />
      <Route path="/projeto-blokebaile" element={<BlokeBaile />} />
      <Route path="/projeto-mellow" element={<MellowProject />} />
    </Routes>
  )
}

export default App
