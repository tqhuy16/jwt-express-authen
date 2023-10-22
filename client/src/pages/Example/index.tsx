import { Container, PageContent } from '@/component'
import TypographiesSection from './TypographiesSection/typographies-section'
import ButtonsSection from './ButtonsSection/buttons-section'
import TableSection from './TableSection/table-section'
import ModalsSection from './ModalsSection/modals-section'
import ToastsSection from './ToastsSection/toasts-section'
import FormSection from './FormSection/form-section'

const Example = () => {
  return (
    <PageContent>
      <Container>
        <TypographiesSection />
        <ButtonsSection />
        <FormSection />
        <TableSection />
        <ModalsSection />
        <ToastsSection />
      </Container>
    </PageContent>
  )
}

export default Example
