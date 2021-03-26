import { useEffect, useState } from 'react'
import { WiMoonAltWaxingCrescent1, WiMoonAltWaxingGibbous6 } from 'react-icons/wi'
import { AiOutlineGithub } from 'react-icons/ai'
import * as allIcons from 'ccy-icons'

import { Stack } from './components/Stack'
import { Button } from './components/Button'
import { IconButton } from './components/IconButton'

import './App.scss'

function toFileName(componentName: string) {
  let lowerName = componentName.toLocaleLowerCase()
  if (lowerName.startsWith('_')) {
    lowerName = lowerName.substr(1)
  }
  return `${lowerName}.svg`
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark-theme')
      document.documentElement.classList.add('light-theme')
    } else {
      document.documentElement.classList.remove('light-theme')
      document.documentElement.classList.add('dark-theme')
    }
  }, [theme])

  function gotoGithub() {
    window.open('https://github.com/DominicTobias/ccy-icons')
  }

  return (
    <div className="App">
      <header className="App-Header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton className="App-LogoBtn" title="Visit GitHub project" onClick={gotoGithub}>
            <AiOutlineGithub className="App-GitHubLogo" />
          </IconButton>
          <h2 className="App-SiteLogo">CCY Icons</h2>
        </div>
        <Button
          emphasis="ghost"
          size="compact"
          decoratorLeft={
            theme === 'light' ? (
              <WiMoonAltWaxingCrescent1 size={14} />
            ) : (
              <WiMoonAltWaxingGibbous6 size={14} />
            )
          }
          onClick={() => setTheme(theme => (theme === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? 'Dark' : 'Light'} theme
        </Button>
      </header>
      <Stack className="App-IconContainer" layout="horizontal" itemMinSize="150px" itemSpacing={2}>
        {Object.entries(allIcons).map(([name, Icon]) => (
          <div key={name} className="Icon-Card">
            <Icon className="App-Icon" />
            <div className="Icon-ComponentName">{`<${name} />`}</div>
            <div className="Icon-ImportPath">{toFileName(name)}</div>
          </div>
        ))}
      </Stack>
    </div>
  )
}

export default App
