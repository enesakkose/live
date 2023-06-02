const setTypes = [
  { value: '1st set', label: 'S1' },
  { value: 'Canceled', label: 'Canceled' },
  { value: 'Walkover', label: 'WO' },
  { value: 'Retired', label: 'Retired' },
  { value: '2nd set', label: `S2` },
  { value: '3rd set', label: 'S3' },
  { value: '4th set', label: 'S4' },
  { value: '5th set', label: 'S5' },
  { value: 'Postponed', label: 'Postponed' },
  { value: 'DELAYED', label: 'Delayed' },
  { value: 'AWARDED', label: 'Awarded' },
  { value: 'Interrupted', label: 'Interrupted' },
  { value: 'FIRST_SET_TIEBREAK', label: `SET 1 TIEBREAK` },
  { value: 'SECOND_SET_TIEBREAK', label: 'SET 2 TIEBREAK' },
  { value: 'THIRD_SET_TIEBREAK', label: 'SET 3 TIEBREAK' },
  { value: 'FOURTH_SET_TIEBREAK', label: 'SET 4 TIEBREAK' },
  { value: 'FIFTH_SET_TIEBREAK', label: 'SET 5 TIEBREAK' },
  { value: 'AFTER_EXTRA_TIME', label: 'Finished' },
  { value: 'AP', label: 'After Pen.' },
  { value: 'PAUSE', label: 'Break Time' },
  { value: 'Awaiting penalties', label: 'Penalties' },
  { value: 'Penalties', label: 'Penalties' },
  { value: 'LIVE', label: 'LIVE' },
  { value: 'PENDING', label: 'PENDING' },
  { value: 'Suspended', label: 'Suspended' }
]

const periodTypes = [
  { value: 'Finished', label: 'Finished' },
  { value: 'Ended', label: 'Finished' },
  { value: 'Halftime', label: 'HT' },
  { value: '1st quarter', label: 'Q1' },
  { value: '2nd quarter', label: 'Q2' },
  { value: '3rd quarter', label: 'Q3' },
  { value: '4th quarter', label: 'Q4' },
  { value: 'Overtime', label: 'OT' },
]

export const getStageType = (stageType: string) => {
  const allTypes = [...setTypes, ...periodTypes]
  const type = allTypes.find((t) => t.value === stageType)
  return type ? type.label : 'N/A'
}
