import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from 'services/api'
import ButtonTable from 'components/core/ButtonTable'
import Header from 'components/Dashboard/Layout/Header'

function Jurisdictions() {
  const history = useHistory()
  const [jurisdictions, setJurisdictions] = useState([])

  useEffect(() => {
    api.jurisdictions.listReleased().then(jurisdictions => {
      const transformed = jurisdictions.map(juris => ({
        ...juris,
        id: juris.wipJurisdictionId,
        volunteerName: juris.editorName,
        volunteerSlackName: juris.editorSlackName,
      }))
      setJurisdictions(transformed)
    })
  }, [])

  return (
    <>
      <Header title='Select a jurisdiction to review.' />
      <ButtonTable
        columns={[
          'jurisdictionName',
          'stateName',
          'volunteerName',
          'volunteerSlackName',
        ]}
        rows={jurisdictions}
        buttonText='Select'
        onClickButton={({ wipJurisdictionId }) => {
          history.push(`/review/${wipJurisdictionId}`)
        }}
        noDataMessage='There are no jurisdictions to review.'
      />
    </>
  )
}

export default Jurisdictions
