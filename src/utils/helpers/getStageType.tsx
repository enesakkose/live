const setTypes = [
  { value: 'FIRST_SET', label: 'SET 1' },
  { value: 'CANCELED', label: 'Canceled' },
  { value: 'WALKOVER', label: 'Withdrawal' },
  { value: 'RETIRED', label: 'Retired' },
  { value: 'SECOND_SET', label: `SET 2` },
  { value: 'THIRD_SET', label: 'SET 3' },
  { value: 'FOURTH_SET', label: 'SET 4' },
  { value: 'FIFTH_SET', label: 'SET 5' },
  { value: 'POSTPONED', label: 'Postponed' },
  { value: 'DELAYED', label: 'Delayed' },
  { value: 'AWARDED', label: 'Awarded' },
  { value: 'INTERRUPTED', label: 'Interrupted'},
  { value: 'FIRST_SET_TIEBREAK', label: `SET 1 TIEBREAK`},
  { value: 'SECOND_SET_TIEBREAK', label: 'SET 2 TIEBREAK'},
  { value: 'THIRD_SET_TIEBREAK', label: 'SET 3 TIEBREAK'},
  { value: 'FOURTH_SET_TIEBREAK', label: 'SET 4 TIEBREAK'},
  { value: 'FIFTH_SET_TIEBREAK', label: 'SET 5 TIEBREAK'},
  { value: 'AFTER_EXTRA_TIME', label: 'FINISHED'}
]

const periodTypes = [
  { value: 'FINISHED', label: 'Finished' },
  { value: 'HALF_TIME', label: 'HT' },
  { value: 'FIRST_QUARTER', label: 'Q1' },
  { value: 'SECOND_QUARTER', label: 'Q2' },
  { value: 'THIRD_QUARTER', label: 'Q3' },
  { value: 'FOURTH_QUARTER', label: 'Q4' },
  { value: 'OVERTIME', label: 'OT' },
]

export const getStageType = (stageType: string) => {
  const allTypes = [...setTypes, ...periodTypes]
  const type = allTypes.find((t) => t.value === stageType)
  return type ? type.label : 'N/A'
}
