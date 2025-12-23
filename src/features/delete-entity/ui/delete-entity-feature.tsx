import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete {entityType}</DialogTitle>
          <DialogDescription>
            All data will be lost. Are you sure you want to delete this{" "}
            {entityType}?
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              ID: {entityId}
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center gap-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
