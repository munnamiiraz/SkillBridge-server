import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model tutor_profile
 *
 */
export type tutor_profileModel = runtime.Types.Result.DefaultSelection<Prisma.$tutor_profilePayload>;
export type AggregateTutor_profile = {
    _count: Tutor_profileCountAggregateOutputType | null;
    _avg: Tutor_profileAvgAggregateOutputType | null;
    _sum: Tutor_profileSumAggregateOutputType | null;
    _min: Tutor_profileMinAggregateOutputType | null;
    _max: Tutor_profileMaxAggregateOutputType | null;
};
export type Tutor_profileAvgAggregateOutputType = {
    hourlyRate: number | null;
    experience: number | null;
    averageRating: number | null;
    totalReviews: number | null;
    totalSessions: number | null;
};
export type Tutor_profileSumAggregateOutputType = {
    hourlyRate: number | null;
    experience: number | null;
    averageRating: number | null;
    totalReviews: number | null;
    totalSessions: number | null;
};
export type Tutor_profileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bio: string | null;
    headline: string | null;
    hourlyRate: number | null;
    address: string | null;
    experience: number | null;
    education: string | null;
    isAvailable: boolean | null;
    averageRating: number | null;
    totalReviews: number | null;
    totalSessions: number | null;
    isFeatured: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Tutor_profileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bio: string | null;
    headline: string | null;
    hourlyRate: number | null;
    address: string | null;
    experience: number | null;
    education: string | null;
    isAvailable: boolean | null;
    averageRating: number | null;
    totalReviews: number | null;
    totalSessions: number | null;
    isFeatured: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Tutor_profileCountAggregateOutputType = {
    id: number;
    userId: number;
    bio: number;
    headline: number;
    hourlyRate: number;
    address: number;
    experience: number;
    education: number;
    isAvailable: number;
    averageRating: number;
    totalReviews: number;
    totalSessions: number;
    isFeatured: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type Tutor_profileAvgAggregateInputType = {
    hourlyRate?: true;
    experience?: true;
    averageRating?: true;
    totalReviews?: true;
    totalSessions?: true;
};
export type Tutor_profileSumAggregateInputType = {
    hourlyRate?: true;
    experience?: true;
    averageRating?: true;
    totalReviews?: true;
    totalSessions?: true;
};
export type Tutor_profileMinAggregateInputType = {
    id?: true;
    userId?: true;
    bio?: true;
    headline?: true;
    hourlyRate?: true;
    address?: true;
    experience?: true;
    education?: true;
    isAvailable?: true;
    averageRating?: true;
    totalReviews?: true;
    totalSessions?: true;
    isFeatured?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Tutor_profileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    bio?: true;
    headline?: true;
    hourlyRate?: true;
    address?: true;
    experience?: true;
    education?: true;
    isAvailable?: true;
    averageRating?: true;
    totalReviews?: true;
    totalSessions?: true;
    isFeatured?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Tutor_profileCountAggregateInputType = {
    id?: true;
    userId?: true;
    bio?: true;
    headline?: true;
    hourlyRate?: true;
    address?: true;
    experience?: true;
    education?: true;
    isAvailable?: true;
    averageRating?: true;
    totalReviews?: true;
    totalSessions?: true;
    isFeatured?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type Tutor_profileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_profile to aggregate.
     */
    where?: Prisma.tutor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: Prisma.tutor_profileOrderByWithRelationInput | Prisma.tutor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tutor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tutor_profiles
    **/
    _count?: true | Tutor_profileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tutor_profileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tutor_profileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tutor_profileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tutor_profileMaxAggregateInputType;
};
export type GetTutor_profileAggregateType<T extends Tutor_profileAggregateArgs> = {
    [P in keyof T & keyof AggregateTutor_profile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTutor_profile[P]> : Prisma.GetScalarType<T[P], AggregateTutor_profile[P]>;
};
export type tutor_profileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tutor_profileWhereInput;
    orderBy?: Prisma.tutor_profileOrderByWithAggregationInput | Prisma.tutor_profileOrderByWithAggregationInput[];
    by: Prisma.Tutor_profileScalarFieldEnum[] | Prisma.Tutor_profileScalarFieldEnum;
    having?: Prisma.tutor_profileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tutor_profileCountAggregateInputType | true;
    _avg?: Tutor_profileAvgAggregateInputType;
    _sum?: Tutor_profileSumAggregateInputType;
    _min?: Tutor_profileMinAggregateInputType;
    _max?: Tutor_profileMaxAggregateInputType;
};
export type Tutor_profileGroupByOutputType = {
    id: string;
    userId: string;
    bio: string | null;
    headline: string | null;
    hourlyRate: number;
    address: string | null;
    experience: number;
    education: string | null;
    isAvailable: boolean;
    averageRating: number;
    totalReviews: number;
    totalSessions: number;
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: Tutor_profileCountAggregateOutputType | null;
    _avg: Tutor_profileAvgAggregateOutputType | null;
    _sum: Tutor_profileSumAggregateOutputType | null;
    _min: Tutor_profileMinAggregateOutputType | null;
    _max: Tutor_profileMaxAggregateOutputType | null;
};
type GetTutor_profileGroupByPayload<T extends tutor_profileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tutor_profileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tutor_profileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tutor_profileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tutor_profileGroupByOutputType[P]>;
}>>;
export type tutor_profileWhereInput = {
    AND?: Prisma.tutor_profileWhereInput | Prisma.tutor_profileWhereInput[];
    OR?: Prisma.tutor_profileWhereInput[];
    NOT?: Prisma.tutor_profileWhereInput | Prisma.tutor_profileWhereInput[];
    id?: Prisma.StringFilter<"tutor_profile"> | string;
    userId?: Prisma.StringFilter<"tutor_profile"> | string;
    bio?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    headline?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    hourlyRate?: Prisma.FloatFilter<"tutor_profile"> | number;
    address?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    experience?: Prisma.IntFilter<"tutor_profile"> | number;
    education?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    isAvailable?: Prisma.BoolFilter<"tutor_profile"> | boolean;
    averageRating?: Prisma.FloatFilter<"tutor_profile"> | number;
    totalReviews?: Prisma.IntFilter<"tutor_profile"> | number;
    totalSessions?: Prisma.IntFilter<"tutor_profile"> | number;
    isFeatured?: Prisma.BoolFilter<"tutor_profile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"tutor_profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"tutor_profile"> | Date | string;
    availability_slot?: Prisma.Availability_slotListRelationFilter;
    booking?: Prisma.BookingListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    tutor_subject?: Prisma.Tutor_subjectListRelationFilter;
};
export type tutor_profileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    headline?: Prisma.SortOrderInput | Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    totalSessions?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    availability_slot?: Prisma.availability_slotOrderByRelationAggregateInput;
    booking?: Prisma.bookingOrderByRelationAggregateInput;
    user?: Prisma.userOrderByWithRelationInput;
    tutor_subject?: Prisma.tutor_subjectOrderByRelationAggregateInput;
};
export type tutor_profileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.tutor_profileWhereInput | Prisma.tutor_profileWhereInput[];
    OR?: Prisma.tutor_profileWhereInput[];
    NOT?: Prisma.tutor_profileWhereInput | Prisma.tutor_profileWhereInput[];
    bio?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    headline?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    hourlyRate?: Prisma.FloatFilter<"tutor_profile"> | number;
    address?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    experience?: Prisma.IntFilter<"tutor_profile"> | number;
    education?: Prisma.StringNullableFilter<"tutor_profile"> | string | null;
    isAvailable?: Prisma.BoolFilter<"tutor_profile"> | boolean;
    averageRating?: Prisma.FloatFilter<"tutor_profile"> | number;
    totalReviews?: Prisma.IntFilter<"tutor_profile"> | number;
    totalSessions?: Prisma.IntFilter<"tutor_profile"> | number;
    isFeatured?: Prisma.BoolFilter<"tutor_profile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"tutor_profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"tutor_profile"> | Date | string;
    availability_slot?: Prisma.Availability_slotListRelationFilter;
    booking?: Prisma.BookingListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    tutor_subject?: Prisma.Tutor_subjectListRelationFilter;
}, "id" | "userId">;
export type tutor_profileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    headline?: Prisma.SortOrderInput | Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    totalSessions?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.tutor_profileCountOrderByAggregateInput;
    _avg?: Prisma.tutor_profileAvgOrderByAggregateInput;
    _max?: Prisma.tutor_profileMaxOrderByAggregateInput;
    _min?: Prisma.tutor_profileMinOrderByAggregateInput;
    _sum?: Prisma.tutor_profileSumOrderByAggregateInput;
};
export type tutor_profileScalarWhereWithAggregatesInput = {
    AND?: Prisma.tutor_profileScalarWhereWithAggregatesInput | Prisma.tutor_profileScalarWhereWithAggregatesInput[];
    OR?: Prisma.tutor_profileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tutor_profileScalarWhereWithAggregatesInput | Prisma.tutor_profileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"tutor_profile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"tutor_profile"> | string;
    bio?: Prisma.StringNullableWithAggregatesFilter<"tutor_profile"> | string | null;
    headline?: Prisma.StringNullableWithAggregatesFilter<"tutor_profile"> | string | null;
    hourlyRate?: Prisma.FloatWithAggregatesFilter<"tutor_profile"> | number;
    address?: Prisma.StringNullableWithAggregatesFilter<"tutor_profile"> | string | null;
    experience?: Prisma.IntWithAggregatesFilter<"tutor_profile"> | number;
    education?: Prisma.StringNullableWithAggregatesFilter<"tutor_profile"> | string | null;
    isAvailable?: Prisma.BoolWithAggregatesFilter<"tutor_profile"> | boolean;
    averageRating?: Prisma.FloatWithAggregatesFilter<"tutor_profile"> | number;
    totalReviews?: Prisma.IntWithAggregatesFilter<"tutor_profile"> | number;
    totalSessions?: Prisma.IntWithAggregatesFilter<"tutor_profile"> | number;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"tutor_profile"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"tutor_profile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"tutor_profile"> | Date | string;
};
export type tutor_profileCreateInput = {
    id: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotCreateNestedManyWithoutTutor_profileInput;
    booking?: Prisma.bookingCreateNestedManyWithoutTutor_profileInput;
    user: Prisma.userCreateNestedOneWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileUncheckedCreateInput = {
    id: string;
    userId: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput;
    booking?: Prisma.bookingUncheckedCreateNestedManyWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUpdateManyWithoutTutor_profileNestedInput;
    booking?: Prisma.bookingUpdateManyWithoutTutor_profileNestedInput;
    user?: Prisma.userUpdateOneRequiredWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput;
    booking?: Prisma.bookingUncheckedUpdateManyWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileCreateManyInput = {
    id: string;
    userId: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type tutor_profileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type tutor_profileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Tutor_profileScalarRelationFilter = {
    is?: Prisma.tutor_profileWhereInput;
    isNot?: Prisma.tutor_profileWhereInput;
};
export type tutor_profileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    headline?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    totalSessions?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type tutor_profileAvgOrderByAggregateInput = {
    hourlyRate?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    totalSessions?: Prisma.SortOrder;
};
export type tutor_profileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    headline?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    totalSessions?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type tutor_profileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    headline?: Prisma.SortOrder;
    hourlyRate?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    education?: Prisma.SortOrder;
    isAvailable?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    totalSessions?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type tutor_profileSumOrderByAggregateInput = {
    hourlyRate?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    averageRating?: Prisma.SortOrder;
    totalReviews?: Prisma.SortOrder;
    totalSessions?: Prisma.SortOrder;
};
export type Tutor_profileNullableScalarRelationFilter = {
    is?: Prisma.tutor_profileWhereInput | null;
    isNot?: Prisma.tutor_profileWhereInput | null;
};
export type tutor_profileCreateNestedOneWithoutAvailability_slotInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutAvailability_slotInput, Prisma.tutor_profileUncheckedCreateWithoutAvailability_slotInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutAvailability_slotInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
};
export type tutor_profileUpdateOneRequiredWithoutAvailability_slotNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutAvailability_slotInput, Prisma.tutor_profileUncheckedCreateWithoutAvailability_slotInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutAvailability_slotInput;
    upsert?: Prisma.tutor_profileUpsertWithoutAvailability_slotInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tutor_profileUpdateToOneWithWhereWithoutAvailability_slotInput, Prisma.tutor_profileUpdateWithoutAvailability_slotInput>, Prisma.tutor_profileUncheckedUpdateWithoutAvailability_slotInput>;
};
export type tutor_profileCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutBookingInput, Prisma.tutor_profileUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutBookingInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
};
export type tutor_profileUpdateOneRequiredWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutBookingInput, Prisma.tutor_profileUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.tutor_profileUpsertWithoutBookingInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tutor_profileUpdateToOneWithWhereWithoutBookingInput, Prisma.tutor_profileUpdateWithoutBookingInput>, Prisma.tutor_profileUncheckedUpdateWithoutBookingInput>;
};
export type tutor_profileCreateNestedOneWithoutTutor_subjectInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutTutor_subjectInput, Prisma.tutor_profileUncheckedCreateWithoutTutor_subjectInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutTutor_subjectInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
};
export type tutor_profileUpdateOneRequiredWithoutTutor_subjectNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutTutor_subjectInput, Prisma.tutor_profileUncheckedCreateWithoutTutor_subjectInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutTutor_subjectInput;
    upsert?: Prisma.tutor_profileUpsertWithoutTutor_subjectInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tutor_profileUpdateToOneWithWhereWithoutTutor_subjectInput, Prisma.tutor_profileUpdateWithoutTutor_subjectInput>, Prisma.tutor_profileUncheckedUpdateWithoutTutor_subjectInput>;
};
export type tutor_profileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutUserInput, Prisma.tutor_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutUserInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
};
export type tutor_profileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutUserInput, Prisma.tutor_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutUserInput;
    connect?: Prisma.tutor_profileWhereUniqueInput;
};
export type tutor_profileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutUserInput, Prisma.tutor_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.tutor_profileUpsertWithoutUserInput;
    disconnect?: Prisma.tutor_profileWhereInput | boolean;
    delete?: Prisma.tutor_profileWhereInput | boolean;
    connect?: Prisma.tutor_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tutor_profileUpdateToOneWithWhereWithoutUserInput, Prisma.tutor_profileUpdateWithoutUserInput>, Prisma.tutor_profileUncheckedUpdateWithoutUserInput>;
};
export type tutor_profileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_profileCreateWithoutUserInput, Prisma.tutor_profileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.tutor_profileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.tutor_profileUpsertWithoutUserInput;
    disconnect?: Prisma.tutor_profileWhereInput | boolean;
    delete?: Prisma.tutor_profileWhereInput | boolean;
    connect?: Prisma.tutor_profileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tutor_profileUpdateToOneWithWhereWithoutUserInput, Prisma.tutor_profileUpdateWithoutUserInput>, Prisma.tutor_profileUncheckedUpdateWithoutUserInput>;
};
export type tutor_profileCreateWithoutAvailability_slotInput = {
    id: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking?: Prisma.bookingCreateNestedManyWithoutTutor_profileInput;
    user: Prisma.userCreateNestedOneWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileUncheckedCreateWithoutAvailability_slotInput = {
    id: string;
    userId: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    booking?: Prisma.bookingUncheckedCreateNestedManyWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileCreateOrConnectWithoutAvailability_slotInput = {
    where: Prisma.tutor_profileWhereUniqueInput;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutAvailability_slotInput, Prisma.tutor_profileUncheckedCreateWithoutAvailability_slotInput>;
};
export type tutor_profileUpsertWithoutAvailability_slotInput = {
    update: Prisma.XOR<Prisma.tutor_profileUpdateWithoutAvailability_slotInput, Prisma.tutor_profileUncheckedUpdateWithoutAvailability_slotInput>;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutAvailability_slotInput, Prisma.tutor_profileUncheckedCreateWithoutAvailability_slotInput>;
    where?: Prisma.tutor_profileWhereInput;
};
export type tutor_profileUpdateToOneWithWhereWithoutAvailability_slotInput = {
    where?: Prisma.tutor_profileWhereInput;
    data: Prisma.XOR<Prisma.tutor_profileUpdateWithoutAvailability_slotInput, Prisma.tutor_profileUncheckedUpdateWithoutAvailability_slotInput>;
};
export type tutor_profileUpdateWithoutAvailability_slotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.bookingUpdateManyWithoutTutor_profileNestedInput;
    user?: Prisma.userUpdateOneRequiredWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileUncheckedUpdateWithoutAvailability_slotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: Prisma.bookingUncheckedUpdateManyWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileCreateWithoutBookingInput = {
    id: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotCreateNestedManyWithoutTutor_profileInput;
    user: Prisma.userCreateNestedOneWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileUncheckedCreateWithoutBookingInput = {
    id: string;
    userId: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileCreateOrConnectWithoutBookingInput = {
    where: Prisma.tutor_profileWhereUniqueInput;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutBookingInput, Prisma.tutor_profileUncheckedCreateWithoutBookingInput>;
};
export type tutor_profileUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.tutor_profileUpdateWithoutBookingInput, Prisma.tutor_profileUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutBookingInput, Prisma.tutor_profileUncheckedCreateWithoutBookingInput>;
    where?: Prisma.tutor_profileWhereInput;
};
export type tutor_profileUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.tutor_profileWhereInput;
    data: Prisma.XOR<Prisma.tutor_profileUpdateWithoutBookingInput, Prisma.tutor_profileUncheckedUpdateWithoutBookingInput>;
};
export type tutor_profileUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUpdateManyWithoutTutor_profileNestedInput;
    user?: Prisma.userUpdateOneRequiredWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileCreateWithoutTutor_subjectInput = {
    id: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotCreateNestedManyWithoutTutor_profileInput;
    booking?: Prisma.bookingCreateNestedManyWithoutTutor_profileInput;
    user: Prisma.userCreateNestedOneWithoutTutor_profileInput;
};
export type tutor_profileUncheckedCreateWithoutTutor_subjectInput = {
    id: string;
    userId: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput;
    booking?: Prisma.bookingUncheckedCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileCreateOrConnectWithoutTutor_subjectInput = {
    where: Prisma.tutor_profileWhereUniqueInput;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutTutor_subjectInput, Prisma.tutor_profileUncheckedCreateWithoutTutor_subjectInput>;
};
export type tutor_profileUpsertWithoutTutor_subjectInput = {
    update: Prisma.XOR<Prisma.tutor_profileUpdateWithoutTutor_subjectInput, Prisma.tutor_profileUncheckedUpdateWithoutTutor_subjectInput>;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutTutor_subjectInput, Prisma.tutor_profileUncheckedCreateWithoutTutor_subjectInput>;
    where?: Prisma.tutor_profileWhereInput;
};
export type tutor_profileUpdateToOneWithWhereWithoutTutor_subjectInput = {
    where?: Prisma.tutor_profileWhereInput;
    data: Prisma.XOR<Prisma.tutor_profileUpdateWithoutTutor_subjectInput, Prisma.tutor_profileUncheckedUpdateWithoutTutor_subjectInput>;
};
export type tutor_profileUpdateWithoutTutor_subjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUpdateManyWithoutTutor_profileNestedInput;
    booking?: Prisma.bookingUpdateManyWithoutTutor_profileNestedInput;
    user?: Prisma.userUpdateOneRequiredWithoutTutor_profileNestedInput;
};
export type tutor_profileUncheckedUpdateWithoutTutor_subjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput;
    booking?: Prisma.bookingUncheckedUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileCreateWithoutUserInput = {
    id: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotCreateNestedManyWithoutTutor_profileInput;
    booking?: Prisma.bookingCreateNestedManyWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileUncheckedCreateWithoutUserInput = {
    id: string;
    bio?: string | null;
    headline?: string | null;
    hourlyRate: number;
    address?: string | null;
    experience?: number;
    education?: string | null;
    isAvailable?: boolean;
    averageRating?: number;
    totalReviews?: number;
    totalSessions?: number;
    isFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    availability_slot?: Prisma.availability_slotUncheckedCreateNestedManyWithoutTutor_profileInput;
    booking?: Prisma.bookingUncheckedCreateNestedManyWithoutTutor_profileInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput;
};
export type tutor_profileCreateOrConnectWithoutUserInput = {
    where: Prisma.tutor_profileWhereUniqueInput;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutUserInput, Prisma.tutor_profileUncheckedCreateWithoutUserInput>;
};
export type tutor_profileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.tutor_profileUpdateWithoutUserInput, Prisma.tutor_profileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.tutor_profileCreateWithoutUserInput, Prisma.tutor_profileUncheckedCreateWithoutUserInput>;
    where?: Prisma.tutor_profileWhereInput;
};
export type tutor_profileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.tutor_profileWhereInput;
    data: Prisma.XOR<Prisma.tutor_profileUpdateWithoutUserInput, Prisma.tutor_profileUncheckedUpdateWithoutUserInput>;
};
export type tutor_profileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUpdateManyWithoutTutor_profileNestedInput;
    booking?: Prisma.bookingUpdateManyWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUpdateManyWithoutTutor_profileNestedInput;
};
export type tutor_profileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hourlyRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    experience?: Prisma.IntFieldUpdateOperationsInput | number;
    education?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    averageRating?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalReviews?: Prisma.IntFieldUpdateOperationsInput | number;
    totalSessions?: Prisma.IntFieldUpdateOperationsInput | number;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    availability_slot?: Prisma.availability_slotUncheckedUpdateManyWithoutTutor_profileNestedInput;
    booking?: Prisma.bookingUncheckedUpdateManyWithoutTutor_profileNestedInput;
    tutor_subject?: Prisma.tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput;
};
/**
 * Count Type Tutor_profileCountOutputType
 */
export type Tutor_profileCountOutputType = {
    availability_slot: number;
    booking: number;
    tutor_subject: number;
};
export type Tutor_profileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    availability_slot?: boolean | Tutor_profileCountOutputTypeCountAvailability_slotArgs;
    booking?: boolean | Tutor_profileCountOutputTypeCountBookingArgs;
    tutor_subject?: boolean | Tutor_profileCountOutputTypeCountTutor_subjectArgs;
};
/**
 * Tutor_profileCountOutputType without action
 */
export type Tutor_profileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor_profileCountOutputType
     */
    select?: Prisma.Tutor_profileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Tutor_profileCountOutputType without action
 */
export type Tutor_profileCountOutputTypeCountAvailability_slotArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.availability_slotWhereInput;
};
/**
 * Tutor_profileCountOutputType without action
 */
export type Tutor_profileCountOutputTypeCountBookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingWhereInput;
};
/**
 * Tutor_profileCountOutputType without action
 */
export type Tutor_profileCountOutputTypeCountTutor_subjectArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tutor_subjectWhereInput;
};
export type tutor_profileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    headline?: boolean;
    hourlyRate?: boolean;
    address?: boolean;
    experience?: boolean;
    education?: boolean;
    isAvailable?: boolean;
    averageRating?: boolean;
    totalReviews?: boolean;
    totalSessions?: boolean;
    isFeatured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    availability_slot?: boolean | Prisma.tutor_profile$availability_slotArgs<ExtArgs>;
    booking?: boolean | Prisma.tutor_profile$bookingArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    tutor_subject?: boolean | Prisma.tutor_profile$tutor_subjectArgs<ExtArgs>;
    _count?: boolean | Prisma.Tutor_profileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tutor_profile"]>;
export type tutor_profileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    headline?: boolean;
    hourlyRate?: boolean;
    address?: boolean;
    experience?: boolean;
    education?: boolean;
    isAvailable?: boolean;
    averageRating?: boolean;
    totalReviews?: boolean;
    totalSessions?: boolean;
    isFeatured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tutor_profile"]>;
export type tutor_profileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    headline?: boolean;
    hourlyRate?: boolean;
    address?: boolean;
    experience?: boolean;
    education?: boolean;
    isAvailable?: boolean;
    averageRating?: boolean;
    totalReviews?: boolean;
    totalSessions?: boolean;
    isFeatured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tutor_profile"]>;
export type tutor_profileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    bio?: boolean;
    headline?: boolean;
    hourlyRate?: boolean;
    address?: boolean;
    experience?: boolean;
    education?: boolean;
    isAvailable?: boolean;
    averageRating?: boolean;
    totalReviews?: boolean;
    totalSessions?: boolean;
    isFeatured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type tutor_profileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "bio" | "headline" | "hourlyRate" | "address" | "experience" | "education" | "isAvailable" | "averageRating" | "totalReviews" | "totalSessions" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["tutor_profile"]>;
export type tutor_profileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    availability_slot?: boolean | Prisma.tutor_profile$availability_slotArgs<ExtArgs>;
    booking?: boolean | Prisma.tutor_profile$bookingArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    tutor_subject?: boolean | Prisma.tutor_profile$tutor_subjectArgs<ExtArgs>;
    _count?: boolean | Prisma.Tutor_profileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tutor_profileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type tutor_profileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $tutor_profilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tutor_profile";
    objects: {
        availability_slot: Prisma.$availability_slotPayload<ExtArgs>[];
        booking: Prisma.$bookingPayload<ExtArgs>[];
        user: Prisma.$userPayload<ExtArgs>;
        tutor_subject: Prisma.$tutor_subjectPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        bio: string | null;
        headline: string | null;
        hourlyRate: number;
        address: string | null;
        experience: number;
        education: string | null;
        isAvailable: boolean;
        averageRating: number;
        totalReviews: number;
        totalSessions: number;
        isFeatured: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tutor_profile"]>;
    composites: {};
};
export type tutor_profileGetPayload<S extends boolean | null | undefined | tutor_profileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload, S>;
export type tutor_profileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tutor_profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tutor_profileCountAggregateInputType | true;
};
export interface tutor_profileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tutor_profile'];
        meta: {
            name: 'tutor_profile';
        };
    };
    /**
     * Find zero or one Tutor_profile that matches the filter.
     * @param {tutor_profileFindUniqueArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutor_profileFindUniqueArgs>(args: Prisma.SelectSubset<T, tutor_profileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tutor_profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutor_profileFindUniqueOrThrowArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutor_profileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tutor_profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tutor_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileFindFirstArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutor_profileFindFirstArgs>(args?: Prisma.SelectSubset<T, tutor_profileFindFirstArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tutor_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileFindFirstOrThrowArgs} args - Arguments to find a Tutor_profile
     * @example
     * // Get one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutor_profileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tutor_profileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tutor_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutor_profiles
     * const tutor_profiles = await prisma.tutor_profile.findMany()
     *
     * // Get first 10 Tutor_profiles
     * const tutor_profiles = await prisma.tutor_profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tutor_profileWithIdOnly = await prisma.tutor_profile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends tutor_profileFindManyArgs>(args?: Prisma.SelectSubset<T, tutor_profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tutor_profile.
     * @param {tutor_profileCreateArgs} args - Arguments to create a Tutor_profile.
     * @example
     * // Create one Tutor_profile
     * const Tutor_profile = await prisma.tutor_profile.create({
     *   data: {
     *     // ... data to create a Tutor_profile
     *   }
     * })
     *
     */
    create<T extends tutor_profileCreateArgs>(args: Prisma.SelectSubset<T, tutor_profileCreateArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tutor_profiles.
     * @param {tutor_profileCreateManyArgs} args - Arguments to create many Tutor_profiles.
     * @example
     * // Create many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tutor_profileCreateManyArgs>(args?: Prisma.SelectSubset<T, tutor_profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tutor_profiles and returns the data saved in the database.
     * @param {tutor_profileCreateManyAndReturnArgs} args - Arguments to create many Tutor_profiles.
     * @example
     * // Create many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tutor_profiles and only return the `id`
     * const tutor_profileWithIdOnly = await prisma.tutor_profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tutor_profileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tutor_profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tutor_profile.
     * @param {tutor_profileDeleteArgs} args - Arguments to delete one Tutor_profile.
     * @example
     * // Delete one Tutor_profile
     * const Tutor_profile = await prisma.tutor_profile.delete({
     *   where: {
     *     // ... filter to delete one Tutor_profile
     *   }
     * })
     *
     */
    delete<T extends tutor_profileDeleteArgs>(args: Prisma.SelectSubset<T, tutor_profileDeleteArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tutor_profile.
     * @param {tutor_profileUpdateArgs} args - Arguments to update one Tutor_profile.
     * @example
     * // Update one Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tutor_profileUpdateArgs>(args: Prisma.SelectSubset<T, tutor_profileUpdateArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tutor_profiles.
     * @param {tutor_profileDeleteManyArgs} args - Arguments to filter Tutor_profiles to delete.
     * @example
     * // Delete a few Tutor_profiles
     * const { count } = await prisma.tutor_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tutor_profileDeleteManyArgs>(args?: Prisma.SelectSubset<T, tutor_profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tutor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tutor_profileUpdateManyArgs>(args: Prisma.SelectSubset<T, tutor_profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tutor_profiles and returns the data updated in the database.
     * @param {tutor_profileUpdateManyAndReturnArgs} args - Arguments to update many Tutor_profiles.
     * @example
     * // Update many Tutor_profiles
     * const tutor_profile = await prisma.tutor_profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tutor_profiles and only return the `id`
     * const tutor_profileWithIdOnly = await prisma.tutor_profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends tutor_profileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tutor_profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tutor_profile.
     * @param {tutor_profileUpsertArgs} args - Arguments to update or create a Tutor_profile.
     * @example
     * // Update or create a Tutor_profile
     * const tutor_profile = await prisma.tutor_profile.upsert({
     *   create: {
     *     // ... data to create a Tutor_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor_profile we want to update
     *   }
     * })
     */
    upsert<T extends tutor_profileUpsertArgs>(args: Prisma.SelectSubset<T, tutor_profileUpsertArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tutor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileCountArgs} args - Arguments to filter Tutor_profiles to count.
     * @example
     * // Count the number of Tutor_profiles
     * const count = await prisma.tutor_profile.count({
     *   where: {
     *     // ... the filter for the Tutor_profiles we want to count
     *   }
     * })
    **/
    count<T extends tutor_profileCountArgs>(args?: Prisma.Subset<T, tutor_profileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tutor_profileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tutor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tutor_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tutor_profileAggregateArgs>(args: Prisma.Subset<T, Tutor_profileAggregateArgs>): Prisma.PrismaPromise<GetTutor_profileAggregateType<T>>;
    /**
     * Group by Tutor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_profileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tutor_profileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tutor_profileGroupByArgs['orderBy'];
    } : {
        orderBy?: tutor_profileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tutor_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutor_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tutor_profile model
     */
    readonly fields: tutor_profileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tutor_profile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tutor_profileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    availability_slot<T extends Prisma.tutor_profile$availability_slotArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tutor_profile$availability_slotArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$availability_slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    booking<T extends Prisma.tutor_profile$bookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tutor_profile$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tutor_subject<T extends Prisma.tutor_profile$tutor_subjectArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tutor_profile$tutor_subjectArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the tutor_profile model
 */
export interface tutor_profileFieldRefs {
    readonly id: Prisma.FieldRef<"tutor_profile", 'String'>;
    readonly userId: Prisma.FieldRef<"tutor_profile", 'String'>;
    readonly bio: Prisma.FieldRef<"tutor_profile", 'String'>;
    readonly headline: Prisma.FieldRef<"tutor_profile", 'String'>;
    readonly hourlyRate: Prisma.FieldRef<"tutor_profile", 'Float'>;
    readonly address: Prisma.FieldRef<"tutor_profile", 'String'>;
    readonly experience: Prisma.FieldRef<"tutor_profile", 'Int'>;
    readonly education: Prisma.FieldRef<"tutor_profile", 'String'>;
    readonly isAvailable: Prisma.FieldRef<"tutor_profile", 'Boolean'>;
    readonly averageRating: Prisma.FieldRef<"tutor_profile", 'Float'>;
    readonly totalReviews: Prisma.FieldRef<"tutor_profile", 'Int'>;
    readonly totalSessions: Prisma.FieldRef<"tutor_profile", 'Int'>;
    readonly isFeatured: Prisma.FieldRef<"tutor_profile", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"tutor_profile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"tutor_profile", 'DateTime'>;
}
/**
 * tutor_profile findUnique
 */
export type tutor_profileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which tutor_profile to fetch.
     */
    where: Prisma.tutor_profileWhereUniqueInput;
};
/**
 * tutor_profile findUniqueOrThrow
 */
export type tutor_profileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which tutor_profile to fetch.
     */
    where: Prisma.tutor_profileWhereUniqueInput;
};
/**
 * tutor_profile findFirst
 */
export type tutor_profileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which tutor_profile to fetch.
     */
    where?: Prisma.tutor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: Prisma.tutor_profileOrderByWithRelationInput | Prisma.tutor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tutor_profiles.
     */
    cursor?: Prisma.tutor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tutor_profiles.
     */
    distinct?: Prisma.Tutor_profileScalarFieldEnum | Prisma.Tutor_profileScalarFieldEnum[];
};
/**
 * tutor_profile findFirstOrThrow
 */
export type tutor_profileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which tutor_profile to fetch.
     */
    where?: Prisma.tutor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: Prisma.tutor_profileOrderByWithRelationInput | Prisma.tutor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tutor_profiles.
     */
    cursor?: Prisma.tutor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tutor_profiles.
     */
    distinct?: Prisma.Tutor_profileScalarFieldEnum | Prisma.Tutor_profileScalarFieldEnum[];
};
/**
 * tutor_profile findMany
 */
export type tutor_profileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which tutor_profiles to fetch.
     */
    where?: Prisma.tutor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_profiles to fetch.
     */
    orderBy?: Prisma.tutor_profileOrderByWithRelationInput | Prisma.tutor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tutor_profiles.
     */
    cursor?: Prisma.tutor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_profiles.
     */
    skip?: number;
    distinct?: Prisma.Tutor_profileScalarFieldEnum | Prisma.Tutor_profileScalarFieldEnum[];
};
/**
 * tutor_profile create
 */
export type tutor_profileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * The data needed to create a tutor_profile.
     */
    data: Prisma.XOR<Prisma.tutor_profileCreateInput, Prisma.tutor_profileUncheckedCreateInput>;
};
/**
 * tutor_profile createMany
 */
export type tutor_profileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutor_profiles.
     */
    data: Prisma.tutor_profileCreateManyInput | Prisma.tutor_profileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tutor_profile createManyAndReturn
 */
export type tutor_profileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * The data used to create many tutor_profiles.
     */
    data: Prisma.tutor_profileCreateManyInput | Prisma.tutor_profileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tutor_profile update
 */
export type tutor_profileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * The data needed to update a tutor_profile.
     */
    data: Prisma.XOR<Prisma.tutor_profileUpdateInput, Prisma.tutor_profileUncheckedUpdateInput>;
    /**
     * Choose, which tutor_profile to update.
     */
    where: Prisma.tutor_profileWhereUniqueInput;
};
/**
 * tutor_profile updateMany
 */
export type tutor_profileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tutor_profiles.
     */
    data: Prisma.XOR<Prisma.tutor_profileUpdateManyMutationInput, Prisma.tutor_profileUncheckedUpdateManyInput>;
    /**
     * Filter which tutor_profiles to update
     */
    where?: Prisma.tutor_profileWhereInput;
    /**
     * Limit how many tutor_profiles to update.
     */
    limit?: number;
};
/**
 * tutor_profile updateManyAndReturn
 */
export type tutor_profileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * The data used to update tutor_profiles.
     */
    data: Prisma.XOR<Prisma.tutor_profileUpdateManyMutationInput, Prisma.tutor_profileUncheckedUpdateManyInput>;
    /**
     * Filter which tutor_profiles to update
     */
    where?: Prisma.tutor_profileWhereInput;
    /**
     * Limit how many tutor_profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tutor_profile upsert
 */
export type tutor_profileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * The filter to search for the tutor_profile to update in case it exists.
     */
    where: Prisma.tutor_profileWhereUniqueInput;
    /**
     * In case the tutor_profile found by the `where` argument doesn't exist, create a new tutor_profile with this data.
     */
    create: Prisma.XOR<Prisma.tutor_profileCreateInput, Prisma.tutor_profileUncheckedCreateInput>;
    /**
     * In case the tutor_profile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tutor_profileUpdateInput, Prisma.tutor_profileUncheckedUpdateInput>;
};
/**
 * tutor_profile delete
 */
export type tutor_profileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
    /**
     * Filter which tutor_profile to delete.
     */
    where: Prisma.tutor_profileWhereUniqueInput;
};
/**
 * tutor_profile deleteMany
 */
export type tutor_profileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_profiles to delete
     */
    where?: Prisma.tutor_profileWhereInput;
    /**
     * Limit how many tutor_profiles to delete.
     */
    limit?: number;
};
/**
 * tutor_profile.availability_slot
 */
export type tutor_profile$availability_slotArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.availability_slotWhereInput;
    orderBy?: Prisma.availability_slotOrderByWithRelationInput | Prisma.availability_slotOrderByWithRelationInput[];
    cursor?: Prisma.availability_slotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Availability_slotScalarFieldEnum | Prisma.Availability_slotScalarFieldEnum[];
};
/**
 * tutor_profile.booking
 */
export type tutor_profile$bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * tutor_profile.tutor_subject
 */
export type tutor_profile$tutor_subjectArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: Prisma.tutor_subjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: Prisma.tutor_subjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_subjectInclude<ExtArgs> | null;
    where?: Prisma.tutor_subjectWhereInput;
    orderBy?: Prisma.tutor_subjectOrderByWithRelationInput | Prisma.tutor_subjectOrderByWithRelationInput[];
    cursor?: Prisma.tutor_subjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tutor_subjectScalarFieldEnum | Prisma.Tutor_subjectScalarFieldEnum[];
};
/**
 * tutor_profile without action
 */
export type tutor_profileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_profile
     */
    select?: Prisma.tutor_profileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_profile
     */
    omit?: Prisma.tutor_profileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_profileInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=tutor_profile.d.ts.map