import * as Dialog from "@radix-ui/react-dialog";
import { animated, useTransition } from "@react-spring/web";
import { styled } from "@stitches/react";
import { CheckCircle } from "lucide-react";

export default function InstallButtonAnimation({ isOpen, onClose }) {
  console.log("DEBUG: InstallButtonAnimation - isOpen is now:", isOpen);
  console.log("DEBUG: InstallButtonAnimation - onClose is:", onClose);

  if (isOpen) {
    console.log(
      "DEBUG: InstallButtonAnimation is rendering with isOpen = true"
    );
  }

  const transition = useTransition(isOpen, {
    from: {
      transform: "translate(-50%, -50%) scale(0)",
      opacity: 0,
    },
    enter: {
      transform: "translate(-50%, -50%) scale(1)",
      opacity: 1,
    },
    leave: {
      transform: "translate(-50%, -50%) scale(0)",
      opacity: 0,
    },
  });

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onClose}>
        <Dialog.Portal forceMount>
          {transition((style, item) =>
            item ? (
              <OverlayBackground
                style={{ opacity: style.opacity }}
                onClick={onClose}
              />
            ) : null
          )}
          {transition((style, item) =>
            item ? (
              <Content forceMount style={style}>
                <DialogHeader>
                  <CloseButton onClick={onClose}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9574 14.1689L8.59651 6.75098L6.73232 8.59598L14.1313 16.071L6.71338 23.4129L8.5964 25.2769L15.9574 17.8779L23.3943 25.2769L25.2392 23.4129L17.8213 16.071L25.2202 8.59598L23.3752 6.75098L15.9574 14.1689Z"
                        fill="currentColor"
                      />
                    </svg>
                  </CloseButton>
                </DialogHeader>
                <CheckCircle
                  size={48}
                  color="#4CAF50"
                  style={{ marginBottom: "16px" }}
                />
                <Title>Thank you for installing our software!</Title>
                <Dialog.Description>
                  Your software has been successfully installed.
                </Dialog.Description>
              </Content>
            ) : null
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

const OverlayBackground = styled(animated(Dialog.Overlay), {
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  pointerEvents: "all",
  position: "fixed",
  inset: 0,
  zIndex: 999,
});

const Content = styled(animated(Dialog.Content), {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "90vw",
  maxWidth: "500px",
  height: "auto",
  maxHeight: "80vh",
  backgroundColor: "#fafafa",
  borderRadius: 8,
  padding: "32px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
});

const DialogHeader = styled("header", {
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  position: "absolute",
  top: 16,
  right: 16,
});

const CloseButton = styled(Dialog.Close, {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  color: "#1B1A22",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

const Title = styled(Dialog.Title, {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 16,
  textAlign: "center",
  color: "#1B1A22",
});

const DialogDescription = styled(Dialog.Description, {
  fontSize: 16,
  textAlign: "center",
  color: "#4A4A4A",
});
