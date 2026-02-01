// tutor.types.ts (add this interface if needed)
export interface AvailabilitySlotResponse {
  id: string;
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface UpdateAvailabilitySlotsResponse {
  weekStartDate: string;
  weekEndDate: string;
  totalSlots: number;
  slots: AvailabilitySlotResponse[];
}