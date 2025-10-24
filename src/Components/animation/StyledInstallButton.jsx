import { styled } from '@stitches/react';

const TriggerPart = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 8,
});

const TriggerShadow = styled(TriggerPart, {
  background: 'hsl(0deg 0% 0% / 0.1)',
  transform: 'translateY(2px)',
  transition: 'transform 250ms ease-out',
});

const TriggerEdge = styled(TriggerPart, {
  background: `linear-gradient(
      to left,
      hsl(0deg 0% 69%) 0%,
      hsl(0deg 0% 85%) 8%,
      hsl(0deg 0% 85%) 92%,
      hsl(0deg 0% 69%) 100%
    )`,
});

const TriggerLabel = styled('span', {
  display: 'block',
  position: 'relative',
  borderRadius: 8,
  color: '#569AFF',
  fontSize: '14px',
  padding: '16px 24px',
  background: '#fafafa',
  transform: 'translateY(-4px)',
  width: '100%',
  userSelect: 'none',
  transition: 'transform 250ms ease-out',
});

const StyledInstallButton = styled('button', {
  border: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  background: 'transparent',
  position: 'relative',
  padding: 0,
  transition: 'filter 250ms ease-out',
  width: 'fit-content',

  '&:hover': {
    filter: 'brightness(110%)',

    [`& ${TriggerLabel}`]: {
      transform: 'translateY(-6px)',
    },

    [`& ${TriggerShadow}`]: {
      transform: 'translateY(4px)',
    },
  },

  '&:active': {
    [`& ${TriggerLabel}`]: {
      transform: 'translateY(-2px)',
      transition: 'transform 34ms',
    },

    [`& ${TriggerShadow}`]: {
      transform: 'translateY(1px)',
      transition: 'transform 34ms',
    },
  },

  '&:disabled': {
    filter: 'grayscale(100%)',
    cursor: 'not-allowed',
    [`& ${TriggerLabel}`]: {
      background: '#cccccc',
      color: '#888888',
      transform: 'translateY(-4px)',
    },
    [`& ${TriggerShadow}`]: {
      background: 'hsl(0deg 0% 0% / 0.05)',
      transform: 'translateY(2px)',
    },
    [`& ${TriggerEdge}`]: {
      background: `linear-gradient(
        to left,
        hsl(0deg 0% 50%) 0%,
        hsl(0deg 0% 65%) 8%,
        hsl(0deg 0% 65%) 92%,
        hsl(0deg 0% 50%) 100%
      )`,
    },
  },
});

export { StyledInstallButton, TriggerShadow, TriggerEdge, TriggerLabel };
