const setTypes = [
  { value: '1st set', label: 'S1', mobileLabel: 'S1' },
  { value: 'Canceled', label: 'Canceled', mobileLabel: 'Canc.' },
  { value: 'Walkover', label: 'WO', mobileLabel: 'WO' },
  { value: 'Retired', label: 'Retired', mobileLabel: 'Ret.' },
  { value: '2nd set', label: `S2`, mobileLabel: 'S2' },
  { value: '3rd set', label: 'S3', mobileLabel: 'S3' },
  { value: '4th set', label: 'S4', mobileLabel: 'S4' },
  { value: '5th set', label: 'S5', mobileLabel: 'S5' },
  { value: 'Postponed', label: 'Postponed', mobileLabel: 'Post.' },
  { value: 'DELAYED', label: 'Delayed', mobileLabel: 'Dely.' },
  { value: 'AWARDED', label: 'Awarded', mobileLabel: 'Awar.' },
  { value: 'Interrupted', label: 'Interrupted', mobileLabel: 'Interr.' },
  { value: 'FIRST_SET_TIEBREAK', label: `SET 1 TIEBREAK`, mobileLabel: 'S1' },
  { value: 'SECOND_SET_TIEBREAK', label: 'SET 2 TIEBREAK', mobileLabel: 'S2' },
  { value: 'THIRD_SET_TIEBREAK', label: 'SET 3 TIEBREAK', mobileLabel: 'S3' },
  { value: 'FOURTH_SET_TIEBREAK', label: 'SET 4 TIEBREAK', mobileLabel: 'S4' },
  { value: 'FIFTH_SET_TIEBREAK', label: 'SET 5 TIEBREAK', mobileLabel: 'S5' },
  { value: 'AET', label: 'FT', mobileLabel: 'FT' },
  { value: 'AP', label: 'After Pen.', mobileLabel: 'AP.' },
  { value: 'Pause', label: 'Break Time', mobileLabel: 'Break' },
  { value: 'Awaiting penalties', label: 'Penalties', mobileLabel: 'Pens.' },
  { value: 'Penalties', label: 'Penalties', mobileLabel: 'PEN' },
  { value: 'LIVE', label: 'LIVE', mobileLabel: 'Live' },
  { value: 'PENDING', label: 'PENDING', mobileLabel: 'Pend.' },
  { value: 'Suspended', label: 'Suspended', mobileLabel: 'Susp.' },
  { value: 'Canceled', label: 'Canceled', mobileLabel: 'Canc.' },
  { value: 'Abandoned', label: 'Abandoned', mobileLabel: 'Aban.' },
  { value: '1st extra', label: 'ET', mobileLabel: 'ET' },
  { value: '2nd extra', label: 'ET', mobileLabel: 'ET' },
  { value: 'Extra time halftime', label: 'ET-HT', mobileLabel: 'ET-HT' },
]

const periodTypes = [
  { value: 'Finished', label: 'FT', mobileLabel: 'FT' },
  { value: 'Ended', label: 'FT', mobileLabel: 'FT' },
  { value: 'Halftime', label: 'HT', mobileLabel: 'HT' },
  { value: '1st quarter', label: 'Q1', mobileLabel: 'Q1' },
  { value: '2nd quarter', label: 'Q2', mobileLabel: 'Q2' },
  { value: '3rd quarter', label: 'Q3', mobileLabel: 'Q3' },
  { value: '4th quarter', label: 'Q4', mobileLabel: 'Q4' },
  { value: 'Overtime', label: 'OT', mobileLabel: 'OT' },
]

export const getStageType = (stageType: string, mobile: boolean = false) => {
  const allTypes = [...setTypes, ...periodTypes]
  const type = allTypes.find((t) => t.value === stageType)
  return type ? (mobile ? type.mobileLabel : type.label) : 'N/A'
}
