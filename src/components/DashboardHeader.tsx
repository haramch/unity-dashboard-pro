import { 
  MessageSquare, 
  Search, 
  Calendar, 
  MoreHorizontal, 
  Bell, 
  User 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  title: string;
  description: string;
  showInfoBanner?: boolean;
  children?: React.ReactNode;
}

export function DashboardHeader({ title, description, showInfoBanner = true, children }: DashboardHeaderProps) {
  return (
    <div className="border-b border-border bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-1 max-w-2xl text-sm">
            {description}
          </p>
        </div>
        
        {/* Header Icons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <MessageSquare className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Calendar className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              1
            </Badge>
          </Button>
          
          <div className="flex items-center space-x-2 ml-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                PAT
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      
      {showInfoBanner && children}
    </div>
  );
}