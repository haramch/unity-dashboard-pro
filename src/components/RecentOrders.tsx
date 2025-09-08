import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recentOrders = [
  {
    id: "#12345",
    customer: "John Doe",
    product: "Wireless Headphones",
    amount: "$299.99",
    status: "completed",
    date: "2025-01-08"
  },
  {
    id: "#12346", 
    customer: "Jane Smith",
    product: "Smart Watch",
    amount: "$199.99",
    status: "pending",
    date: "2025-01-08"
  },
  {
    id: "#12347",
    customer: "Mike Johnson",
    product: "Bluetooth Speaker",
    amount: "$79.99", 
    status: "processing",
    date: "2025-01-07"
  },
  {
    id: "#12348",
    customer: "Sarah Wilson",
    product: "Phone Case",
    amount: "$24.99",
    status: "completed",
    date: "2025-01-07"
  },
  {
    id: "#12349",
    customer: "David Brown",
    product: "Laptop Stand",
    amount: "$49.99",
    status: "cancelled",
    date: "2025-01-06"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
    case "processing":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    case "cancelled":
      return "bg-red-100 text-red-800 hover:bg-red-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

export function RecentOrders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-sm">{order.id}</span>
                  <Badge variant="secondary" className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{order.customer}</p>
                <p className="text-xs text-muted-foreground">{order.product}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{order.amount}</p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}