import Modal from "./modal";

type SettingsModalProps = {
  onCancel: () => void;
};

export default function SettingsModal({ onCancel }: SettingsModalProps) {
  return (
    <Modal>
      <h1>Paramètres</h1>
    </Modal>
  );
}
