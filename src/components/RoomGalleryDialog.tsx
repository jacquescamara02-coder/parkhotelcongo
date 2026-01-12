import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoomGalleryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roomName: string;
  images: string[];
}

const RoomGalleryDialog = ({ open, onOpenChange, roomName, images }: RoomGalleryDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-card">
        <DialogTitle className="sr-only">{roomName} - Galerie photos</DialogTitle>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>
          
          <div className="p-6 pb-2">
            <h3 className="font-display text-2xl font-semibold text-foreground">{roomName}</h3>
            <p className="text-muted-foreground">Galerie photos</p>
          </div>
          
          <div className="px-12 pb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${roomName} - Photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
            
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-primary/30"
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomGalleryDialog;
