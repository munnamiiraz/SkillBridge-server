import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model availability_slot
 *
 */
export type availability_slotModel = runtime.Types.Result.DefaultSelection<Prisma.$availability_slotPayload>;
export type AggregateAvailability_slot = {
    _count: Availability_slotCountAggregateOutputType | null;
    _avg: Availability_slotAvgAggregateOutputType | null;
    _sum: Availability_slotSumAggregateOutputType | null;
    _min: Availability_slotMinAggregateOutputType | null;
    _max: Availability_slotMaxAggregateOutputType | null;
};
export type Availability_slotAvgAggregateOutputType = {
    dayOfWeek: number | null;
};
export type Availability_slotSumAggregateOutputType = {
    dayOfWeek: number | null;
};
export type Availability_slotMinAggregateOutputType = {
    id: string | null;
    tutorProfileId: string | null;
    dayOfWeek: number | null;
    startTime: string | null;
    endTime: string | null;
    isRecurring: boolean | null;
    specificDate: Date | null;
    isBooked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Availability_slotMaxAggregateOutputType = {
    id: string | null;
    tutorProfileId: string | null;
    dayOfWeek: number | null;
    startTime: string | null;
    endTime: string | null;
    isRecurring: boolean | null;
    specificDate: Date | null;
    isBooked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Availability_slotCountAggregateOutputType = {
    id: number;
    tutorProfileId: number;
    dayOfWeek: number;
    startTime: number;
    endTime: number;
    isRecurring: number;
    specificDate: number;
    isBooked: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type Availability_slotAvgAggregateInputType = {
    dayOfWeek?: true;
};
export type Availability_slotSumAggregateInputType = {
    dayOfWeek?: true;
};
export type Availability_slotMinAggregateInputType = {
    id?: true;
    tutorProfileId?: true;
    dayOfWeek?: true;
    startTime?: true;
    endTime?: true;
    isRecurring?: true;
    specificDate?: true;
    isBooked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Availability_slotMaxAggregateInputType = {
    id?: true;
    tutorProfileId?: true;
    dayOfWeek?: true;
    startTime?: true;
    endTime?: true;
    isRecurring?: true;
    specificDate?: true;
    isBooked?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Availability_slotCountAggregateInputType = {
    id?: true;
    tutorProfileId?: true;
    dayOfWeek?: true;
    startTime?: true;
    endTime?: true;
    isRecurring?: true;
    specificDate?: true;
    isBooked?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type Availability_slotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which availability_slot to aggregate.
     */
    where?: Prisma.availability_slotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: Prisma.availability_slotOrderByWithRelationInput | Prisma.availability_slotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.availability_slotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` availability_slots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned availability_slots
    **/
    _count?: true | Availability_slotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Availability_slotAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Availability_slotSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Availability_slotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Availability_slotMaxAggregateInputType;
};
export type GetAvailability_slotAggregateType<T extends Availability_slotAggregateArgs> = {
    [P in keyof T & keyof AggregateAvailability_slot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvailability_slot[P]> : Prisma.GetScalarType<T[P], AggregateAvailability_slot[P]>;
};
export type availability_slotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.availability_slotWhereInput;
    orderBy?: Prisma.availability_slotOrderByWithAggregationInput | Prisma.availability_slotOrderByWithAggregationInput[];
    by: Prisma.Availability_slotScalarFieldEnum[] | Prisma.Availability_slotScalarFieldEnum;
    having?: Prisma.availability_slotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Availability_slotCountAggregateInputType | true;
    _avg?: Availability_slotAvgAggregateInputType;
    _sum?: Availability_slotSumAggregateInputType;
    _min?: Availability_slotMinAggregateInputType;
    _max?: Availability_slotMaxAggregateInputType;
};
export type Availability_slotGroupByOutputType = {
    id: string;
    tutorProfileId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring: boolean;
    specificDate: Date | null;
    isBooked: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: Availability_slotCountAggregateOutputType | null;
    _avg: Availability_slotAvgAggregateOutputType | null;
    _sum: Availability_slotSumAggregateOutputType | null;
    _min: Availability_slotMinAggregateOutputType | null;
    _max: Availability_slotMaxAggregateOutputType | null;
};
type GetAvailability_slotGroupByPayload<T extends availability_slotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Availability_slotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Availability_slotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Availability_slotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Availability_slotGroupByOutputType[P]>;
}>>;
export type availability_slotWhereInput = {
    AND?: Prisma.availability_slotWhereInput | Prisma.availability_slotWhereInput[];
    OR?: Prisma.availability_slotWhereInput[];
    NOT?: Prisma.availability_slotWhereInput | Prisma.availability_slotWhereInput[];
    id?: Prisma.StringFilter<"availability_slot"> | string;
    tutorProfileId?: Prisma.StringFilter<"availability_slot"> | string;
    dayOfWeek?: Prisma.IntFilter<"availability_slot"> | number;
    startTime?: Prisma.StringFilter<"availability_slot"> | string;
    endTime?: Prisma.StringFilter<"availability_slot"> | string;
    isRecurring?: Prisma.BoolFilter<"availability_slot"> | boolean;
    specificDate?: Prisma.DateTimeNullableFilter<"availability_slot"> | Date | string | null;
    isBooked?: Prisma.BoolFilter<"availability_slot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"availability_slot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"availability_slot"> | Date | string;
    tutor_profile?: Prisma.XOR<Prisma.Tutor_profileScalarRelationFilter, Prisma.tutor_profileWhereInput>;
    booking?: Prisma.BookingListRelationFilter;
};
export type availability_slotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    specificDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tutor_profile?: Prisma.tutor_profileOrderByWithRelationInput;
    booking?: Prisma.bookingOrderByRelationAggregateInput;
};
export type availability_slotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.availability_slotWhereInput | Prisma.availability_slotWhereInput[];
    OR?: Prisma.availability_slotWhereInput[];
    NOT?: Prisma.availability_slotWhereInput | Prisma.availability_slotWhereInput[];
    tutorProfileId?: Prisma.StringFilter<"availability_slot"> | string;
    dayOfWeek?: Prisma.IntFilter<"availability_slot"> | number;
    startTime?: Prisma.StringFilter<"availability_slot"> | string;
    endTime?: Prisma.StringFilter<"availability_slot"> | string;
    isRecurring?: Prisma.BoolFilter<"availability_slot"> | boolean;
    specificDate?: Prisma.DateTimeNullableFilter<"availability_slot"> | Date | string | null;
    isBooked?: Prisma.BoolFilter<"availability_slot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"availability_slot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"availability_slot"> | Date | string;
    tutor_profile?: Prisma.XOR<Prisma.Tutor_profileScalarRelationFilter, Prisma.tutor_profileWhereInput>;
    booking?: Prisma.BookingListRelationFilter;
}, "id">;
export type availability_slotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    specificDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.availability_slotCountOrderByAggregateInput;
    _avg?: Prisma.availability_slotAvgOrderByAggregateInput;
    _max?: Prisma.availability_slotMaxOrderByAggregateInput;
    _min?: Prisma.availability_slotMinOrderByAggregateInput;
    _sum?: Prisma.availability_slotSumOrderByAggregateInput;
};
export type availability_slotScalarWhereWithAggregatesInput = {
    AND?: Prisma.availability_slotScalarWhereWithAggregatesInput | Prisma.availability_slotScalarWhereWithAggregatesInput[];
    OR?: Prisma.availability_slotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.availability_slotScalarWhereWithAggregatesInput | Prisma.availability_slotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"availability_slot"> | string;
    tutorProfileId?: Prisma.StringWithAggregatesFilter<"availability_slot"> | string;
    dayOfWeek?: Prisma.IntWithAggregatesFilter<"availability_slot"> | number;
    startTime?: Prisma.StringWithAggregatesFilter<"availability_slot"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"availability_slot"> | string;
    isRecurring?: Prisma.BoolWithAggregatesFilter<"availability_slot"> | boolean;
    specificDate?: Prisma.DateTimeNullableWithAggregatesFilter<"availability_slot"> | Date | string | null;
    isBooked?: Prisma.BoolWithAggregatesFilter<"availability_slot"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"availability_slot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"availability_slot"> | Date | string;
};
export type availability_slotCreateInput = {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor_profile: Prisma.tutor_profileCreateNestedOneWithoutAvailability_slotInput;
    booking?: Prisma.bookingCreateNestedManyWithoutAvailability_slotInput;
};
export type availability_slotUncheckedCreateInput = {
    id: string;
    tutorProfileId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking?: Prisma.bookingUncheckedCreateNestedManyWithoutAvailability_slotInput;
};
export type availability_slotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor_profile?: Prisma.tutor_profileUpdateOneRequiredWithoutAvailability_slotNestedInput;
    booking?: Prisma.bookingUpdateManyWithoutAvailability_slotNestedInput;
};
export type availability_slotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.bookingUncheckedUpdateManyWithoutAvailability_slotNestedInput;
};
export type availability_slotCreateManyInput = {
    id: string;
    tutorProfileId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type availability_slotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type availability_slotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type availability_slotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    specificDate?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type availability_slotAvgOrderByAggregateInput = {
    dayOfWeek?: Prisma.SortOrder;
};
export type availability_slotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    specificDate?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type availability_slotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    isRecurring?: Prisma.SortOrder;
    specificDate?: Prisma.SortOrder;
    isBooked?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type availability_slotSumOrderByAggregateInput = {
    dayOfWeek?: Prisma.SortOrder;
};
export type Availability_slotNullableScalarRelationFilter = {
    is?: Prisma.availability_slotWhereInput | null;
    isNot?: Prisma.availability_slotWhereInput | null;
};
export type Availability_slotListRelationFilter = {
    every?: Prisma.availability_slotWhereInput;
    some?: Prisma.availability_slotWhereInput;
    none?: Prisma.availability_slotWhereInput;
};
export type availability_slotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type availability_slotCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.availability_slotCreateWithoutBookingInput, Prisma.availability_slotUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.availability_slotCreateOrConnectWithoutBookingInput;
    connect?: Prisma.availability_slotWhereUniqueInput;
};
export type availability_slotUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.availability_slotCreateWithoutBookingInput, Prisma.availability_slotUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.availability_slotCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.availability_slotUpsertWithoutBookingInput;
    disconnect?: Prisma.availability_slotWhereInput | boolean;
    delete?: Prisma.availability_slotWhereInput | boolean;
    connect?: Prisma.availability_slotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.availability_slotUpdateToOneWithWhereWithoutBookingInput, Prisma.availability_slotUpdateWithoutBookingInput>, Prisma.availability_slotUncheckedUpdateWithoutBookingInput>;
};
export type availability_slotCreateNestedManyWithoutTutor_profileInput = {
    create?: Prisma.XOR<Prisma.availability_slotCreateWithoutTutor_profileInput, Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput> | Prisma.availability_slotCreateWithoutTutor_profileInput[] | Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput | Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput[];
    createMany?: Prisma.availability_slotCreateManyTutor_profileInputEnvelope;
    connect?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
};
export type availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput = {
    create?: Prisma.XOR<Prisma.availability_slotCreateWithoutTutor_profileInput, Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput> | Prisma.availability_slotCreateWithoutTutor_profileInput[] | Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput | Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput[];
    createMany?: Prisma.availability_slotCreateManyTutor_profileInputEnvelope;
    connect?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
};
export type availability_slotUpdateManyWithoutTutor_profileNestedInput = {
    create?: Prisma.XOR<Prisma.availability_slotCreateWithoutTutor_profileInput, Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput> | Prisma.availability_slotCreateWithoutTutor_profileInput[] | Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput | Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput[];
    upsert?: Prisma.availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput | Prisma.availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput[];
    createMany?: Prisma.availability_slotCreateManyTutor_profileInputEnvelope;
    set?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    disconnect?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    delete?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    connect?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    update?: Prisma.availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput | Prisma.availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput[];
    updateMany?: Prisma.availability_slotUpdateManyWithWhereWithoutTutor_profileInput | Prisma.availability_slotUpdateManyWithWhereWithoutTutor_profileInput[];
    deleteMany?: Prisma.availability_slotScalarWhereInput | Prisma.availability_slotScalarWhereInput[];
};
export type availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput = {
    create?: Prisma.XOR<Prisma.availability_slotCreateWithoutTutor_profileInput, Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput> | Prisma.availability_slotCreateWithoutTutor_profileInput[] | Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput | Prisma.availability_slotCreateOrConnectWithoutTutor_profileInput[];
    upsert?: Prisma.availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput | Prisma.availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput[];
    createMany?: Prisma.availability_slotCreateManyTutor_profileInputEnvelope;
    set?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    disconnect?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    delete?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    connect?: Prisma.availability_slotWhereUniqueInput | Prisma.availability_slotWhereUniqueInput[];
    update?: Prisma.availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput | Prisma.availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput[];
    updateMany?: Prisma.availability_slotUpdateManyWithWhereWithoutTutor_profileInput | Prisma.availability_slotUpdateManyWithWhereWithoutTutor_profileInput[];
    deleteMany?: Prisma.availability_slotScalarWhereInput | Prisma.availability_slotScalarWhereInput[];
};
export type availability_slotCreateWithoutBookingInput = {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tutor_profile: Prisma.tutor_profileCreateNestedOneWithoutAvailability_slotInput;
};
export type availability_slotUncheckedCreateWithoutBookingInput = {
    id: string;
    tutorProfileId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type availability_slotCreateOrConnectWithoutBookingInput = {
    where: Prisma.availability_slotWhereUniqueInput;
    create: Prisma.XOR<Prisma.availability_slotCreateWithoutBookingInput, Prisma.availability_slotUncheckedCreateWithoutBookingInput>;
};
export type availability_slotUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.availability_slotUpdateWithoutBookingInput, Prisma.availability_slotUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.availability_slotCreateWithoutBookingInput, Prisma.availability_slotUncheckedCreateWithoutBookingInput>;
    where?: Prisma.availability_slotWhereInput;
};
export type availability_slotUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.availability_slotWhereInput;
    data: Prisma.XOR<Prisma.availability_slotUpdateWithoutBookingInput, Prisma.availability_slotUncheckedUpdateWithoutBookingInput>;
};
export type availability_slotUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tutor_profile?: Prisma.tutor_profileUpdateOneRequiredWithoutAvailability_slotNestedInput;
};
export type availability_slotUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type availability_slotCreateWithoutTutor_profileInput = {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking?: Prisma.bookingCreateNestedManyWithoutAvailability_slotInput;
};
export type availability_slotUncheckedCreateWithoutTutor_profileInput = {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking?: Prisma.bookingUncheckedCreateNestedManyWithoutAvailability_slotInput;
};
export type availability_slotCreateOrConnectWithoutTutor_profileInput = {
    where: Prisma.availability_slotWhereUniqueInput;
    create: Prisma.XOR<Prisma.availability_slotCreateWithoutTutor_profileInput, Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput>;
};
export type availability_slotCreateManyTutor_profileInputEnvelope = {
    data: Prisma.availability_slotCreateManyTutor_profileInput | Prisma.availability_slotCreateManyTutor_profileInput[];
    skipDuplicates?: boolean;
};
export type availability_slotUpsertWithWhereUniqueWithoutTutor_profileInput = {
    where: Prisma.availability_slotWhereUniqueInput;
    update: Prisma.XOR<Prisma.availability_slotUpdateWithoutTutor_profileInput, Prisma.availability_slotUncheckedUpdateWithoutTutor_profileInput>;
    create: Prisma.XOR<Prisma.availability_slotCreateWithoutTutor_profileInput, Prisma.availability_slotUncheckedCreateWithoutTutor_profileInput>;
};
export type availability_slotUpdateWithWhereUniqueWithoutTutor_profileInput = {
    where: Prisma.availability_slotWhereUniqueInput;
    data: Prisma.XOR<Prisma.availability_slotUpdateWithoutTutor_profileInput, Prisma.availability_slotUncheckedUpdateWithoutTutor_profileInput>;
};
export type availability_slotUpdateManyWithWhereWithoutTutor_profileInput = {
    where: Prisma.availability_slotScalarWhereInput;
    data: Prisma.XOR<Prisma.availability_slotUpdateManyMutationInput, Prisma.availability_slotUncheckedUpdateManyWithoutTutor_profileInput>;
};
export type availability_slotScalarWhereInput = {
    AND?: Prisma.availability_slotScalarWhereInput | Prisma.availability_slotScalarWhereInput[];
    OR?: Prisma.availability_slotScalarWhereInput[];
    NOT?: Prisma.availability_slotScalarWhereInput | Prisma.availability_slotScalarWhereInput[];
    id?: Prisma.StringFilter<"availability_slot"> | string;
    tutorProfileId?: Prisma.StringFilter<"availability_slot"> | string;
    dayOfWeek?: Prisma.IntFilter<"availability_slot"> | number;
    startTime?: Prisma.StringFilter<"availability_slot"> | string;
    endTime?: Prisma.StringFilter<"availability_slot"> | string;
    isRecurring?: Prisma.BoolFilter<"availability_slot"> | boolean;
    specificDate?: Prisma.DateTimeNullableFilter<"availability_slot"> | Date | string | null;
    isBooked?: Prisma.BoolFilter<"availability_slot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"availability_slot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"availability_slot"> | Date | string;
};
export type availability_slotCreateManyTutor_profileInput = {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring?: boolean;
    specificDate?: Date | string | null;
    isBooked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type availability_slotUpdateWithoutTutor_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.bookingUpdateManyWithoutAvailability_slotNestedInput;
};
export type availability_slotUncheckedUpdateWithoutTutor_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.bookingUncheckedUpdateManyWithoutAvailability_slotNestedInput;
};
export type availability_slotUncheckedUpdateManyWithoutTutor_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.IntFieldUpdateOperationsInput | number;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    isRecurring?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    specificDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBooked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Availability_slotCountOutputType
 */
export type Availability_slotCountOutputType = {
    booking: number;
};
export type Availability_slotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking?: boolean | Availability_slotCountOutputTypeCountBookingArgs;
};
/**
 * Availability_slotCountOutputType without action
 */
export type Availability_slotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability_slotCountOutputType
     */
    select?: Prisma.Availability_slotCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Availability_slotCountOutputType without action
 */
export type Availability_slotCountOutputTypeCountBookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingWhereInput;
};
export type availability_slotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorProfileId?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isRecurring?: boolean;
    specificDate?: boolean;
    isBooked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.availability_slot$bookingArgs<ExtArgs>;
    _count?: boolean | Prisma.Availability_slotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availability_slot"]>;
export type availability_slotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorProfileId?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isRecurring?: boolean;
    specificDate?: boolean;
    isBooked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availability_slot"]>;
export type availability_slotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorProfileId?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isRecurring?: boolean;
    specificDate?: boolean;
    isBooked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availability_slot"]>;
export type availability_slotSelectScalar = {
    id?: boolean;
    tutorProfileId?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    isRecurring?: boolean;
    specificDate?: boolean;
    isBooked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type availability_slotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tutorProfileId" | "dayOfWeek" | "startTime" | "endTime" | "isRecurring" | "specificDate" | "isBooked" | "createdAt" | "updatedAt", ExtArgs["result"]["availability_slot"]>;
export type availability_slotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.availability_slot$bookingArgs<ExtArgs>;
    _count?: boolean | Prisma.Availability_slotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type availability_slotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
};
export type availability_slotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
};
export type $availability_slotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "availability_slot";
    objects: {
        tutor_profile: Prisma.$tutor_profilePayload<ExtArgs>;
        booking: Prisma.$bookingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tutorProfileId: string;
        dayOfWeek: number;
        startTime: string;
        endTime: string;
        isRecurring: boolean;
        specificDate: Date | null;
        isBooked: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["availability_slot"]>;
    composites: {};
};
export type availability_slotGetPayload<S extends boolean | null | undefined | availability_slotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$availability_slotPayload, S>;
export type availability_slotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<availability_slotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Availability_slotCountAggregateInputType | true;
};
export interface availability_slotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['availability_slot'];
        meta: {
            name: 'availability_slot';
        };
    };
    /**
     * Find zero or one Availability_slot that matches the filter.
     * @param {availability_slotFindUniqueArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends availability_slotFindUniqueArgs>(args: Prisma.SelectSubset<T, availability_slotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Availability_slot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {availability_slotFindUniqueOrThrowArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends availability_slotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, availability_slotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Availability_slot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotFindFirstArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends availability_slotFindFirstArgs>(args?: Prisma.SelectSubset<T, availability_slotFindFirstArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Availability_slot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotFindFirstOrThrowArgs} args - Arguments to find a Availability_slot
     * @example
     * // Get one Availability_slot
     * const availability_slot = await prisma.availability_slot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends availability_slotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, availability_slotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Availability_slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availability_slots
     * const availability_slots = await prisma.availability_slot.findMany()
     *
     * // Get first 10 Availability_slots
     * const availability_slots = await prisma.availability_slot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const availability_slotWithIdOnly = await prisma.availability_slot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends availability_slotFindManyArgs>(args?: Prisma.SelectSubset<T, availability_slotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Availability_slot.
     * @param {availability_slotCreateArgs} args - Arguments to create a Availability_slot.
     * @example
     * // Create one Availability_slot
     * const Availability_slot = await prisma.availability_slot.create({
     *   data: {
     *     // ... data to create a Availability_slot
     *   }
     * })
     *
     */
    create<T extends availability_slotCreateArgs>(args: Prisma.SelectSubset<T, availability_slotCreateArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Availability_slots.
     * @param {availability_slotCreateManyArgs} args - Arguments to create many Availability_slots.
     * @example
     * // Create many Availability_slots
     * const availability_slot = await prisma.availability_slot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends availability_slotCreateManyArgs>(args?: Prisma.SelectSubset<T, availability_slotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Availability_slots and returns the data saved in the database.
     * @param {availability_slotCreateManyAndReturnArgs} args - Arguments to create many Availability_slots.
     * @example
     * // Create many Availability_slots
     * const availability_slot = await prisma.availability_slot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Availability_slots and only return the `id`
     * const availability_slotWithIdOnly = await prisma.availability_slot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends availability_slotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, availability_slotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Availability_slot.
     * @param {availability_slotDeleteArgs} args - Arguments to delete one Availability_slot.
     * @example
     * // Delete one Availability_slot
     * const Availability_slot = await prisma.availability_slot.delete({
     *   where: {
     *     // ... filter to delete one Availability_slot
     *   }
     * })
     *
     */
    delete<T extends availability_slotDeleteArgs>(args: Prisma.SelectSubset<T, availability_slotDeleteArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Availability_slot.
     * @param {availability_slotUpdateArgs} args - Arguments to update one Availability_slot.
     * @example
     * // Update one Availability_slot
     * const availability_slot = await prisma.availability_slot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends availability_slotUpdateArgs>(args: Prisma.SelectSubset<T, availability_slotUpdateArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Availability_slots.
     * @param {availability_slotDeleteManyArgs} args - Arguments to filter Availability_slots to delete.
     * @example
     * // Delete a few Availability_slots
     * const { count } = await prisma.availability_slot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends availability_slotDeleteManyArgs>(args?: Prisma.SelectSubset<T, availability_slotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Availability_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availability_slots
     * const availability_slot = await prisma.availability_slot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends availability_slotUpdateManyArgs>(args: Prisma.SelectSubset<T, availability_slotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Availability_slots and returns the data updated in the database.
     * @param {availability_slotUpdateManyAndReturnArgs} args - Arguments to update many Availability_slots.
     * @example
     * // Update many Availability_slots
     * const availability_slot = await prisma.availability_slot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Availability_slots and only return the `id`
     * const availability_slotWithIdOnly = await prisma.availability_slot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends availability_slotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, availability_slotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Availability_slot.
     * @param {availability_slotUpsertArgs} args - Arguments to update or create a Availability_slot.
     * @example
     * // Update or create a Availability_slot
     * const availability_slot = await prisma.availability_slot.upsert({
     *   create: {
     *     // ... data to create a Availability_slot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability_slot we want to update
     *   }
     * })
     */
    upsert<T extends availability_slotUpsertArgs>(args: Prisma.SelectSubset<T, availability_slotUpsertArgs<ExtArgs>>): Prisma.Prisma__availability_slotClient<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Availability_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotCountArgs} args - Arguments to filter Availability_slots to count.
     * @example
     * // Count the number of Availability_slots
     * const count = await prisma.availability_slot.count({
     *   where: {
     *     // ... the filter for the Availability_slots we want to count
     *   }
     * })
    **/
    count<T extends availability_slotCountArgs>(args?: Prisma.Subset<T, availability_slotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Availability_slotCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Availability_slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Availability_slotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Availability_slotAggregateArgs>(args: Prisma.Subset<T, Availability_slotAggregateArgs>): Prisma.PrismaPromise<GetAvailability_slotAggregateType<T>>;
    /**
     * Group by Availability_slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availability_slotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends availability_slotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: availability_slotGroupByArgs['orderBy'];
    } : {
        orderBy?: availability_slotGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, availability_slotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailability_slotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the availability_slot model
     */
    readonly fields: availability_slotFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for availability_slot.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__availability_slotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tutor_profile<T extends Prisma.tutor_profileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tutor_profileDefaultArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    booking<T extends Prisma.availability_slot$bookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.availability_slot$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the availability_slot model
 */
export interface availability_slotFieldRefs {
    readonly id: Prisma.FieldRef<"availability_slot", 'String'>;
    readonly tutorProfileId: Prisma.FieldRef<"availability_slot", 'String'>;
    readonly dayOfWeek: Prisma.FieldRef<"availability_slot", 'Int'>;
    readonly startTime: Prisma.FieldRef<"availability_slot", 'String'>;
    readonly endTime: Prisma.FieldRef<"availability_slot", 'String'>;
    readonly isRecurring: Prisma.FieldRef<"availability_slot", 'Boolean'>;
    readonly specificDate: Prisma.FieldRef<"availability_slot", 'DateTime'>;
    readonly isBooked: Prisma.FieldRef<"availability_slot", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"availability_slot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"availability_slot", 'DateTime'>;
}
/**
 * availability_slot findUnique
 */
export type availability_slotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * Filter, which availability_slot to fetch.
     */
    where: Prisma.availability_slotWhereUniqueInput;
};
/**
 * availability_slot findUniqueOrThrow
 */
export type availability_slotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * Filter, which availability_slot to fetch.
     */
    where: Prisma.availability_slotWhereUniqueInput;
};
/**
 * availability_slot findFirst
 */
export type availability_slotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * Filter, which availability_slot to fetch.
     */
    where?: Prisma.availability_slotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: Prisma.availability_slotOrderByWithRelationInput | Prisma.availability_slotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for availability_slots.
     */
    cursor?: Prisma.availability_slotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` availability_slots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of availability_slots.
     */
    distinct?: Prisma.Availability_slotScalarFieldEnum | Prisma.Availability_slotScalarFieldEnum[];
};
/**
 * availability_slot findFirstOrThrow
 */
export type availability_slotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * Filter, which availability_slot to fetch.
     */
    where?: Prisma.availability_slotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: Prisma.availability_slotOrderByWithRelationInput | Prisma.availability_slotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for availability_slots.
     */
    cursor?: Prisma.availability_slotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` availability_slots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of availability_slots.
     */
    distinct?: Prisma.Availability_slotScalarFieldEnum | Prisma.Availability_slotScalarFieldEnum[];
};
/**
 * availability_slot findMany
 */
export type availability_slotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * Filter, which availability_slots to fetch.
     */
    where?: Prisma.availability_slotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of availability_slots to fetch.
     */
    orderBy?: Prisma.availability_slotOrderByWithRelationInput | Prisma.availability_slotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing availability_slots.
     */
    cursor?: Prisma.availability_slotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` availability_slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` availability_slots.
     */
    skip?: number;
    distinct?: Prisma.Availability_slotScalarFieldEnum | Prisma.Availability_slotScalarFieldEnum[];
};
/**
 * availability_slot create
 */
export type availability_slotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * The data needed to create a availability_slot.
     */
    data: Prisma.XOR<Prisma.availability_slotCreateInput, Prisma.availability_slotUncheckedCreateInput>;
};
/**
 * availability_slot createMany
 */
export type availability_slotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many availability_slots.
     */
    data: Prisma.availability_slotCreateManyInput | Prisma.availability_slotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * availability_slot createManyAndReturn
 */
export type availability_slotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * The data used to create many availability_slots.
     */
    data: Prisma.availability_slotCreateManyInput | Prisma.availability_slotCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * availability_slot update
 */
export type availability_slotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * The data needed to update a availability_slot.
     */
    data: Prisma.XOR<Prisma.availability_slotUpdateInput, Prisma.availability_slotUncheckedUpdateInput>;
    /**
     * Choose, which availability_slot to update.
     */
    where: Prisma.availability_slotWhereUniqueInput;
};
/**
 * availability_slot updateMany
 */
export type availability_slotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update availability_slots.
     */
    data: Prisma.XOR<Prisma.availability_slotUpdateManyMutationInput, Prisma.availability_slotUncheckedUpdateManyInput>;
    /**
     * Filter which availability_slots to update
     */
    where?: Prisma.availability_slotWhereInput;
    /**
     * Limit how many availability_slots to update.
     */
    limit?: number;
};
/**
 * availability_slot updateManyAndReturn
 */
export type availability_slotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * The data used to update availability_slots.
     */
    data: Prisma.XOR<Prisma.availability_slotUpdateManyMutationInput, Prisma.availability_slotUncheckedUpdateManyInput>;
    /**
     * Filter which availability_slots to update
     */
    where?: Prisma.availability_slotWhereInput;
    /**
     * Limit how many availability_slots to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * availability_slot upsert
 */
export type availability_slotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * The filter to search for the availability_slot to update in case it exists.
     */
    where: Prisma.availability_slotWhereUniqueInput;
    /**
     * In case the availability_slot found by the `where` argument doesn't exist, create a new availability_slot with this data.
     */
    create: Prisma.XOR<Prisma.availability_slotCreateInput, Prisma.availability_slotUncheckedCreateInput>;
    /**
     * In case the availability_slot was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.availability_slotUpdateInput, Prisma.availability_slotUncheckedUpdateInput>;
};
/**
 * availability_slot delete
 */
export type availability_slotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
    /**
     * Filter which availability_slot to delete.
     */
    where: Prisma.availability_slotWhereUniqueInput;
};
/**
 * availability_slot deleteMany
 */
export type availability_slotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which availability_slots to delete
     */
    where?: Prisma.availability_slotWhereInput;
    /**
     * Limit how many availability_slots to delete.
     */
    limit?: number;
};
/**
 * availability_slot.booking
 */
export type availability_slot$bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: Prisma.bookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the booking
     */
    omit?: Prisma.bookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.bookingInclude<ExtArgs> | null;
    where?: Prisma.bookingWhereInput;
    orderBy?: Prisma.bookingOrderByWithRelationInput | Prisma.bookingOrderByWithRelationInput[];
    cursor?: Prisma.bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
/**
 * availability_slot without action
 */
export type availability_slotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability_slot
     */
    select?: Prisma.availability_slotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the availability_slot
     */
    omit?: Prisma.availability_slotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.availability_slotInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=availability_slot.d.ts.map