import React from 'react'
import { useTranslation } from 'react-i18next'
// useTranslation é um hook 
// que devolve uma função de tradução (t) e a instância do i18n

import { BrasilFlag, EuaFlag } from 'assets'
import Flag from './Flag'

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = 'pt-BR'//i18n.language
  return (
    <div className="flags-container">
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
      <Flag
        image={EuaFlag}
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </div>
  )
}

export default I18n