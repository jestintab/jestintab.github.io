import styled from 'styled-components'
import { Content } from 'carbon-components-react/lib/components/UIShell'

export const StyledContent = styled(Content)`
  min-height: 100vh;
  background:#ccc;
  color: #000;

  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`
