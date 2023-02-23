export const getCasesWithCategory = (businessCases, categoryData) => {
  return businessCases.filter(
    item => item.data.case_category.uid === categoryData.uid
  )
}
