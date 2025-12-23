"use client";

import { Modal } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";

export interface DeleteEntityFeatureProps {
  entityType: string;
  entityId: string | number;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: string | number) => void;
}

export function DeleteEntityFeature({
  entityType,
  entityId,
  isOpen,
  onClose,
  onConfirm,
}: DeleteEntityFeatureProps) {
  const handleConfirm = () => {
    onConfirm(entityId);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header title={`Delete ${entityType}`} onClose={onClose} />
      <Modal.Body>
        <div className="p-4 flex flex-col gap-4 text-center">
          <p className="font-medium text-gray-700">
            All data will be lost. Are you sure you want to delete this{" "}
            {entityType}?
          </p>
          <p className="text-sm text-gray-400">ID: {entityId}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-center gap-4 w-full">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
