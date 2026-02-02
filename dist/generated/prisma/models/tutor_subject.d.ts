import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model tutor_subject
 *
 */
export type tutor_subjectModel = runtime.Types.Result.DefaultSelection<Prisma.$tutor_subjectPayload>;
export type AggregateTutor_subject = {
    _count: Tutor_subjectCountAggregateOutputType | null;
    _min: Tutor_subjectMinAggregateOutputType | null;
    _max: Tutor_subjectMaxAggregateOutputType | null;
};
export type Tutor_subjectMinAggregateOutputType = {
    id: string | null;
    tutorProfileId: string | null;
    subjectId: string | null;
};
export type Tutor_subjectMaxAggregateOutputType = {
    id: string | null;
    tutorProfileId: string | null;
    subjectId: string | null;
};
export type Tutor_subjectCountAggregateOutputType = {
    id: number;
    tutorProfileId: number;
    subjectId: number;
    _all: number;
};
export type Tutor_subjectMinAggregateInputType = {
    id?: true;
    tutorProfileId?: true;
    subjectId?: true;
};
export type Tutor_subjectMaxAggregateInputType = {
    id?: true;
    tutorProfileId?: true;
    subjectId?: true;
};
export type Tutor_subjectCountAggregateInputType = {
    id?: true;
    tutorProfileId?: true;
    subjectId?: true;
    _all?: true;
};
export type Tutor_subjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_subject to aggregate.
     */
    where?: Prisma.tutor_subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: Prisma.tutor_subjectOrderByWithRelationInput | Prisma.tutor_subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tutor_subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tutor_subjects
    **/
    _count?: true | Tutor_subjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tutor_subjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tutor_subjectMaxAggregateInputType;
};
export type GetTutor_subjectAggregateType<T extends Tutor_subjectAggregateArgs> = {
    [P in keyof T & keyof AggregateTutor_subject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTutor_subject[P]> : Prisma.GetScalarType<T[P], AggregateTutor_subject[P]>;
};
export type tutor_subjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tutor_subjectWhereInput;
    orderBy?: Prisma.tutor_subjectOrderByWithAggregationInput | Prisma.tutor_subjectOrderByWithAggregationInput[];
    by: Prisma.Tutor_subjectScalarFieldEnum[] | Prisma.Tutor_subjectScalarFieldEnum;
    having?: Prisma.tutor_subjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tutor_subjectCountAggregateInputType | true;
    _min?: Tutor_subjectMinAggregateInputType;
    _max?: Tutor_subjectMaxAggregateInputType;
};
export type Tutor_subjectGroupByOutputType = {
    id: string;
    tutorProfileId: string;
    subjectId: string;
    _count: Tutor_subjectCountAggregateOutputType | null;
    _min: Tutor_subjectMinAggregateOutputType | null;
    _max: Tutor_subjectMaxAggregateOutputType | null;
};
type GetTutor_subjectGroupByPayload<T extends tutor_subjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tutor_subjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tutor_subjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tutor_subjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tutor_subjectGroupByOutputType[P]>;
}>>;
export type tutor_subjectWhereInput = {
    AND?: Prisma.tutor_subjectWhereInput | Prisma.tutor_subjectWhereInput[];
    OR?: Prisma.tutor_subjectWhereInput[];
    NOT?: Prisma.tutor_subjectWhereInput | Prisma.tutor_subjectWhereInput[];
    id?: Prisma.StringFilter<"tutor_subject"> | string;
    tutorProfileId?: Prisma.StringFilter<"tutor_subject"> | string;
    subjectId?: Prisma.StringFilter<"tutor_subject"> | string;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.subjectWhereInput>;
    tutor_profile?: Prisma.XOR<Prisma.Tutor_profileScalarRelationFilter, Prisma.tutor_profileWhereInput>;
};
export type tutor_subjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    subject?: Prisma.subjectOrderByWithRelationInput;
    tutor_profile?: Prisma.tutor_profileOrderByWithRelationInput;
};
export type tutor_subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tutorProfileId_subjectId?: Prisma.tutor_subjectTutorProfileIdSubjectIdCompoundUniqueInput;
    AND?: Prisma.tutor_subjectWhereInput | Prisma.tutor_subjectWhereInput[];
    OR?: Prisma.tutor_subjectWhereInput[];
    NOT?: Prisma.tutor_subjectWhereInput | Prisma.tutor_subjectWhereInput[];
    tutorProfileId?: Prisma.StringFilter<"tutor_subject"> | string;
    subjectId?: Prisma.StringFilter<"tutor_subject"> | string;
    subject?: Prisma.XOR<Prisma.SubjectScalarRelationFilter, Prisma.subjectWhereInput>;
    tutor_profile?: Prisma.XOR<Prisma.Tutor_profileScalarRelationFilter, Prisma.tutor_profileWhereInput>;
}, "id" | "tutorProfileId_subjectId">;
export type tutor_subjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
    _count?: Prisma.tutor_subjectCountOrderByAggregateInput;
    _max?: Prisma.tutor_subjectMaxOrderByAggregateInput;
    _min?: Prisma.tutor_subjectMinOrderByAggregateInput;
};
export type tutor_subjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.tutor_subjectScalarWhereWithAggregatesInput | Prisma.tutor_subjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.tutor_subjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tutor_subjectScalarWhereWithAggregatesInput | Prisma.tutor_subjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"tutor_subject"> | string;
    tutorProfileId?: Prisma.StringWithAggregatesFilter<"tutor_subject"> | string;
    subjectId?: Prisma.StringWithAggregatesFilter<"tutor_subject"> | string;
};
export type tutor_subjectCreateInput = {
    id: string;
    subject: Prisma.subjectCreateNestedOneWithoutTutor_subjectInput;
    tutor_profile: Prisma.tutor_profileCreateNestedOneWithoutTutor_subjectInput;
};
export type tutor_subjectUncheckedCreateInput = {
    id: string;
    tutorProfileId: string;
    subjectId: string;
};
export type tutor_subjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.subjectUpdateOneRequiredWithoutTutor_subjectNestedInput;
    tutor_profile?: Prisma.tutor_profileUpdateOneRequiredWithoutTutor_subjectNestedInput;
};
export type tutor_subjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tutor_subjectCreateManyInput = {
    id: string;
    tutorProfileId: string;
    subjectId: string;
};
export type tutor_subjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tutor_subjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Tutor_subjectListRelationFilter = {
    every?: Prisma.tutor_subjectWhereInput;
    some?: Prisma.tutor_subjectWhereInput;
    none?: Prisma.tutor_subjectWhereInput;
};
export type tutor_subjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tutor_subjectTutorProfileIdSubjectIdCompoundUniqueInput = {
    tutorProfileId: string;
    subjectId: string;
};
export type tutor_subjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
};
export type tutor_subjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
};
export type tutor_subjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tutorProfileId?: Prisma.SortOrder;
    subjectId?: Prisma.SortOrder;
};
export type tutor_subjectCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutSubjectInput, Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput> | Prisma.tutor_subjectCreateWithoutSubjectInput[] | Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput | Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.tutor_subjectCreateManySubjectInputEnvelope;
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
};
export type tutor_subjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutSubjectInput, Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput> | Prisma.tutor_subjectCreateWithoutSubjectInput[] | Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput | Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.tutor_subjectCreateManySubjectInputEnvelope;
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
};
export type tutor_subjectUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutSubjectInput, Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput> | Prisma.tutor_subjectCreateWithoutSubjectInput[] | Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput | Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput | Prisma.tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.tutor_subjectCreateManySubjectInputEnvelope;
    set?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    disconnect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    delete?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    update?: Prisma.tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput | Prisma.tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.tutor_subjectUpdateManyWithWhereWithoutSubjectInput | Prisma.tutor_subjectUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.tutor_subjectScalarWhereInput | Prisma.tutor_subjectScalarWhereInput[];
};
export type tutor_subjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutSubjectInput, Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput> | Prisma.tutor_subjectCreateWithoutSubjectInput[] | Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput | Prisma.tutor_subjectCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput | Prisma.tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.tutor_subjectCreateManySubjectInputEnvelope;
    set?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    disconnect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    delete?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    update?: Prisma.tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput | Prisma.tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.tutor_subjectUpdateManyWithWhereWithoutSubjectInput | Prisma.tutor_subjectUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.tutor_subjectScalarWhereInput | Prisma.tutor_subjectScalarWhereInput[];
};
export type tutor_subjectCreateNestedManyWithoutTutor_profileInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput> | Prisma.tutor_subjectCreateWithoutTutor_profileInput[] | Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput | Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput[];
    createMany?: Prisma.tutor_subjectCreateManyTutor_profileInputEnvelope;
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
};
export type tutor_subjectUncheckedCreateNestedManyWithoutTutor_profileInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput> | Prisma.tutor_subjectCreateWithoutTutor_profileInput[] | Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput | Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput[];
    createMany?: Prisma.tutor_subjectCreateManyTutor_profileInputEnvelope;
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
};
export type tutor_subjectUpdateManyWithoutTutor_profileNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput> | Prisma.tutor_subjectCreateWithoutTutor_profileInput[] | Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput | Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput[];
    upsert?: Prisma.tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput | Prisma.tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput[];
    createMany?: Prisma.tutor_subjectCreateManyTutor_profileInputEnvelope;
    set?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    disconnect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    delete?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    update?: Prisma.tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput | Prisma.tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput[];
    updateMany?: Prisma.tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput | Prisma.tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput[];
    deleteMany?: Prisma.tutor_subjectScalarWhereInput | Prisma.tutor_subjectScalarWhereInput[];
};
export type tutor_subjectUncheckedUpdateManyWithoutTutor_profileNestedInput = {
    create?: Prisma.XOR<Prisma.tutor_subjectCreateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput> | Prisma.tutor_subjectCreateWithoutTutor_profileInput[] | Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput[];
    connectOrCreate?: Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput | Prisma.tutor_subjectCreateOrConnectWithoutTutor_profileInput[];
    upsert?: Prisma.tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput | Prisma.tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput[];
    createMany?: Prisma.tutor_subjectCreateManyTutor_profileInputEnvelope;
    set?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    disconnect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    delete?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    connect?: Prisma.tutor_subjectWhereUniqueInput | Prisma.tutor_subjectWhereUniqueInput[];
    update?: Prisma.tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput | Prisma.tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput[];
    updateMany?: Prisma.tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput | Prisma.tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput[];
    deleteMany?: Prisma.tutor_subjectScalarWhereInput | Prisma.tutor_subjectScalarWhereInput[];
};
export type tutor_subjectCreateWithoutSubjectInput = {
    id: string;
    tutor_profile: Prisma.tutor_profileCreateNestedOneWithoutTutor_subjectInput;
};
export type tutor_subjectUncheckedCreateWithoutSubjectInput = {
    id: string;
    tutorProfileId: string;
};
export type tutor_subjectCreateOrConnectWithoutSubjectInput = {
    where: Prisma.tutor_subjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.tutor_subjectCreateWithoutSubjectInput, Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput>;
};
export type tutor_subjectCreateManySubjectInputEnvelope = {
    data: Prisma.tutor_subjectCreateManySubjectInput | Prisma.tutor_subjectCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type tutor_subjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.tutor_subjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.tutor_subjectUpdateWithoutSubjectInput, Prisma.tutor_subjectUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.tutor_subjectCreateWithoutSubjectInput, Prisma.tutor_subjectUncheckedCreateWithoutSubjectInput>;
};
export type tutor_subjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.tutor_subjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.tutor_subjectUpdateWithoutSubjectInput, Prisma.tutor_subjectUncheckedUpdateWithoutSubjectInput>;
};
export type tutor_subjectUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.tutor_subjectScalarWhereInput;
    data: Prisma.XOR<Prisma.tutor_subjectUpdateManyMutationInput, Prisma.tutor_subjectUncheckedUpdateManyWithoutSubjectInput>;
};
export type tutor_subjectScalarWhereInput = {
    AND?: Prisma.tutor_subjectScalarWhereInput | Prisma.tutor_subjectScalarWhereInput[];
    OR?: Prisma.tutor_subjectScalarWhereInput[];
    NOT?: Prisma.tutor_subjectScalarWhereInput | Prisma.tutor_subjectScalarWhereInput[];
    id?: Prisma.StringFilter<"tutor_subject"> | string;
    tutorProfileId?: Prisma.StringFilter<"tutor_subject"> | string;
    subjectId?: Prisma.StringFilter<"tutor_subject"> | string;
};
export type tutor_subjectCreateWithoutTutor_profileInput = {
    id: string;
    subject: Prisma.subjectCreateNestedOneWithoutTutor_subjectInput;
};
export type tutor_subjectUncheckedCreateWithoutTutor_profileInput = {
    id: string;
    subjectId: string;
};
export type tutor_subjectCreateOrConnectWithoutTutor_profileInput = {
    where: Prisma.tutor_subjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.tutor_subjectCreateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput>;
};
export type tutor_subjectCreateManyTutor_profileInputEnvelope = {
    data: Prisma.tutor_subjectCreateManyTutor_profileInput | Prisma.tutor_subjectCreateManyTutor_profileInput[];
    skipDuplicates?: boolean;
};
export type tutor_subjectUpsertWithWhereUniqueWithoutTutor_profileInput = {
    where: Prisma.tutor_subjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.tutor_subjectUpdateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedUpdateWithoutTutor_profileInput>;
    create: Prisma.XOR<Prisma.tutor_subjectCreateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedCreateWithoutTutor_profileInput>;
};
export type tutor_subjectUpdateWithWhereUniqueWithoutTutor_profileInput = {
    where: Prisma.tutor_subjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.tutor_subjectUpdateWithoutTutor_profileInput, Prisma.tutor_subjectUncheckedUpdateWithoutTutor_profileInput>;
};
export type tutor_subjectUpdateManyWithWhereWithoutTutor_profileInput = {
    where: Prisma.tutor_subjectScalarWhereInput;
    data: Prisma.XOR<Prisma.tutor_subjectUpdateManyMutationInput, Prisma.tutor_subjectUncheckedUpdateManyWithoutTutor_profileInput>;
};
export type tutor_subjectCreateManySubjectInput = {
    id: string;
    tutorProfileId: string;
};
export type tutor_subjectUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutor_profile?: Prisma.tutor_profileUpdateOneRequiredWithoutTutor_subjectNestedInput;
};
export type tutor_subjectUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tutor_subjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tutorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tutor_subjectCreateManyTutor_profileInput = {
    id: string;
    subjectId: string;
};
export type tutor_subjectUpdateWithoutTutor_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.subjectUpdateOneRequiredWithoutTutor_subjectNestedInput;
};
export type tutor_subjectUncheckedUpdateWithoutTutor_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tutor_subjectUncheckedUpdateManyWithoutTutor_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subjectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type tutor_subjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorProfileId?: boolean;
    subjectId?: boolean;
    subject?: boolean | Prisma.subjectDefaultArgs<ExtArgs>;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tutor_subject"]>;
export type tutor_subjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorProfileId?: boolean;
    subjectId?: boolean;
    subject?: boolean | Prisma.subjectDefaultArgs<ExtArgs>;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tutor_subject"]>;
export type tutor_subjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tutorProfileId?: boolean;
    subjectId?: boolean;
    subject?: boolean | Prisma.subjectDefaultArgs<ExtArgs>;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tutor_subject"]>;
export type tutor_subjectSelectScalar = {
    id?: boolean;
    tutorProfileId?: boolean;
    subjectId?: boolean;
};
export type tutor_subjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tutorProfileId" | "subjectId", ExtArgs["result"]["tutor_subject"]>;
export type tutor_subjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.subjectDefaultArgs<ExtArgs>;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
};
export type tutor_subjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.subjectDefaultArgs<ExtArgs>;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
};
export type tutor_subjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subject?: boolean | Prisma.subjectDefaultArgs<ExtArgs>;
    tutor_profile?: boolean | Prisma.tutor_profileDefaultArgs<ExtArgs>;
};
export type $tutor_subjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tutor_subject";
    objects: {
        subject: Prisma.$subjectPayload<ExtArgs>;
        tutor_profile: Prisma.$tutor_profilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tutorProfileId: string;
        subjectId: string;
    }, ExtArgs["result"]["tutor_subject"]>;
    composites: {};
};
export type tutor_subjectGetPayload<S extends boolean | null | undefined | tutor_subjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload, S>;
export type tutor_subjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tutor_subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tutor_subjectCountAggregateInputType | true;
};
export interface tutor_subjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tutor_subject'];
        meta: {
            name: 'tutor_subject';
        };
    };
    /**
     * Find zero or one Tutor_subject that matches the filter.
     * @param {tutor_subjectFindUniqueArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tutor_subjectFindUniqueArgs>(args: Prisma.SelectSubset<T, tutor_subjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tutor_subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tutor_subjectFindUniqueOrThrowArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tutor_subjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tutor_subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tutor_subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectFindFirstArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tutor_subjectFindFirstArgs>(args?: Prisma.SelectSubset<T, tutor_subjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tutor_subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectFindFirstOrThrowArgs} args - Arguments to find a Tutor_subject
     * @example
     * // Get one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tutor_subjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tutor_subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tutor_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutor_subjects
     * const tutor_subjects = await prisma.tutor_subject.findMany()
     *
     * // Get first 10 Tutor_subjects
     * const tutor_subjects = await prisma.tutor_subject.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tutor_subjectWithIdOnly = await prisma.tutor_subject.findMany({ select: { id: true } })
     *
     */
    findMany<T extends tutor_subjectFindManyArgs>(args?: Prisma.SelectSubset<T, tutor_subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tutor_subject.
     * @param {tutor_subjectCreateArgs} args - Arguments to create a Tutor_subject.
     * @example
     * // Create one Tutor_subject
     * const Tutor_subject = await prisma.tutor_subject.create({
     *   data: {
     *     // ... data to create a Tutor_subject
     *   }
     * })
     *
     */
    create<T extends tutor_subjectCreateArgs>(args: Prisma.SelectSubset<T, tutor_subjectCreateArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tutor_subjects.
     * @param {tutor_subjectCreateManyArgs} args - Arguments to create many Tutor_subjects.
     * @example
     * // Create many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tutor_subjectCreateManyArgs>(args?: Prisma.SelectSubset<T, tutor_subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tutor_subjects and returns the data saved in the database.
     * @param {tutor_subjectCreateManyAndReturnArgs} args - Arguments to create many Tutor_subjects.
     * @example
     * // Create many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tutor_subjects and only return the `id`
     * const tutor_subjectWithIdOnly = await prisma.tutor_subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tutor_subjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tutor_subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tutor_subject.
     * @param {tutor_subjectDeleteArgs} args - Arguments to delete one Tutor_subject.
     * @example
     * // Delete one Tutor_subject
     * const Tutor_subject = await prisma.tutor_subject.delete({
     *   where: {
     *     // ... filter to delete one Tutor_subject
     *   }
     * })
     *
     */
    delete<T extends tutor_subjectDeleteArgs>(args: Prisma.SelectSubset<T, tutor_subjectDeleteArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tutor_subject.
     * @param {tutor_subjectUpdateArgs} args - Arguments to update one Tutor_subject.
     * @example
     * // Update one Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tutor_subjectUpdateArgs>(args: Prisma.SelectSubset<T, tutor_subjectUpdateArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tutor_subjects.
     * @param {tutor_subjectDeleteManyArgs} args - Arguments to filter Tutor_subjects to delete.
     * @example
     * // Delete a few Tutor_subjects
     * const { count } = await prisma.tutor_subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tutor_subjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, tutor_subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tutor_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tutor_subjectUpdateManyArgs>(args: Prisma.SelectSubset<T, tutor_subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tutor_subjects and returns the data updated in the database.
     * @param {tutor_subjectUpdateManyAndReturnArgs} args - Arguments to update many Tutor_subjects.
     * @example
     * // Update many Tutor_subjects
     * const tutor_subject = await prisma.tutor_subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tutor_subjects and only return the `id`
     * const tutor_subjectWithIdOnly = await prisma.tutor_subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends tutor_subjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tutor_subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tutor_subject.
     * @param {tutor_subjectUpsertArgs} args - Arguments to update or create a Tutor_subject.
     * @example
     * // Update or create a Tutor_subject
     * const tutor_subject = await prisma.tutor_subject.upsert({
     *   create: {
     *     // ... data to create a Tutor_subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor_subject we want to update
     *   }
     * })
     */
    upsert<T extends tutor_subjectUpsertArgs>(args: Prisma.SelectSubset<T, tutor_subjectUpsertArgs<ExtArgs>>): Prisma.Prisma__tutor_subjectClient<runtime.Types.Result.GetResult<Prisma.$tutor_subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tutor_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectCountArgs} args - Arguments to filter Tutor_subjects to count.
     * @example
     * // Count the number of Tutor_subjects
     * const count = await prisma.tutor_subject.count({
     *   where: {
     *     // ... the filter for the Tutor_subjects we want to count
     *   }
     * })
    **/
    count<T extends tutor_subjectCountArgs>(args?: Prisma.Subset<T, tutor_subjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tutor_subjectCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tutor_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tutor_subjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tutor_subjectAggregateArgs>(args: Prisma.Subset<T, Tutor_subjectAggregateArgs>): Prisma.PrismaPromise<GetTutor_subjectAggregateType<T>>;
    /**
     * Group by Tutor_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tutor_subjectGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tutor_subjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tutor_subjectGroupByArgs['orderBy'];
    } : {
        orderBy?: tutor_subjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tutor_subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutor_subjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tutor_subject model
     */
    readonly fields: tutor_subjectFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tutor_subject.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tutor_subjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subject<T extends Prisma.subjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subjectDefaultArgs<ExtArgs>>): Prisma.Prisma__subjectClient<runtime.Types.Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tutor_profile<T extends Prisma.tutor_profileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tutor_profileDefaultArgs<ExtArgs>>): Prisma.Prisma__tutor_profileClient<runtime.Types.Result.GetResult<Prisma.$tutor_profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the tutor_subject model
 */
export interface tutor_subjectFieldRefs {
    readonly id: Prisma.FieldRef<"tutor_subject", 'String'>;
    readonly tutorProfileId: Prisma.FieldRef<"tutor_subject", 'String'>;
    readonly subjectId: Prisma.FieldRef<"tutor_subject", 'String'>;
}
/**
 * tutor_subject findUnique
 */
export type tutor_subjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tutor_subject to fetch.
     */
    where: Prisma.tutor_subjectWhereUniqueInput;
};
/**
 * tutor_subject findUniqueOrThrow
 */
export type tutor_subjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tutor_subject to fetch.
     */
    where: Prisma.tutor_subjectWhereUniqueInput;
};
/**
 * tutor_subject findFirst
 */
export type tutor_subjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tutor_subject to fetch.
     */
    where?: Prisma.tutor_subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: Prisma.tutor_subjectOrderByWithRelationInput | Prisma.tutor_subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tutor_subjects.
     */
    cursor?: Prisma.tutor_subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tutor_subjects.
     */
    distinct?: Prisma.Tutor_subjectScalarFieldEnum | Prisma.Tutor_subjectScalarFieldEnum[];
};
/**
 * tutor_subject findFirstOrThrow
 */
export type tutor_subjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tutor_subject to fetch.
     */
    where?: Prisma.tutor_subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: Prisma.tutor_subjectOrderByWithRelationInput | Prisma.tutor_subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tutor_subjects.
     */
    cursor?: Prisma.tutor_subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tutor_subjects.
     */
    distinct?: Prisma.Tutor_subjectScalarFieldEnum | Prisma.Tutor_subjectScalarFieldEnum[];
};
/**
 * tutor_subject findMany
 */
export type tutor_subjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which tutor_subjects to fetch.
     */
    where?: Prisma.tutor_subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tutor_subjects to fetch.
     */
    orderBy?: Prisma.tutor_subjectOrderByWithRelationInput | Prisma.tutor_subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tutor_subjects.
     */
    cursor?: Prisma.tutor_subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tutor_subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tutor_subjects.
     */
    skip?: number;
    distinct?: Prisma.Tutor_subjectScalarFieldEnum | Prisma.Tutor_subjectScalarFieldEnum[];
};
/**
 * tutor_subject create
 */
export type tutor_subjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a tutor_subject.
     */
    data: Prisma.XOR<Prisma.tutor_subjectCreateInput, Prisma.tutor_subjectUncheckedCreateInput>;
};
/**
 * tutor_subject createMany
 */
export type tutor_subjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tutor_subjects.
     */
    data: Prisma.tutor_subjectCreateManyInput | Prisma.tutor_subjectCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tutor_subject createManyAndReturn
 */
export type tutor_subjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: Prisma.tutor_subjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: Prisma.tutor_subjectOmit<ExtArgs> | null;
    /**
     * The data used to create many tutor_subjects.
     */
    data: Prisma.tutor_subjectCreateManyInput | Prisma.tutor_subjectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_subjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * tutor_subject update
 */
export type tutor_subjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a tutor_subject.
     */
    data: Prisma.XOR<Prisma.tutor_subjectUpdateInput, Prisma.tutor_subjectUncheckedUpdateInput>;
    /**
     * Choose, which tutor_subject to update.
     */
    where: Prisma.tutor_subjectWhereUniqueInput;
};
/**
 * tutor_subject updateMany
 */
export type tutor_subjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tutor_subjects.
     */
    data: Prisma.XOR<Prisma.tutor_subjectUpdateManyMutationInput, Prisma.tutor_subjectUncheckedUpdateManyInput>;
    /**
     * Filter which tutor_subjects to update
     */
    where?: Prisma.tutor_subjectWhereInput;
    /**
     * Limit how many tutor_subjects to update.
     */
    limit?: number;
};
/**
 * tutor_subject updateManyAndReturn
 */
export type tutor_subjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tutor_subject
     */
    select?: Prisma.tutor_subjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tutor_subject
     */
    omit?: Prisma.tutor_subjectOmit<ExtArgs> | null;
    /**
     * The data used to update tutor_subjects.
     */
    data: Prisma.XOR<Prisma.tutor_subjectUpdateManyMutationInput, Prisma.tutor_subjectUncheckedUpdateManyInput>;
    /**
     * Filter which tutor_subjects to update
     */
    where?: Prisma.tutor_subjectWhereInput;
    /**
     * Limit how many tutor_subjects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.tutor_subjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * tutor_subject upsert
 */
export type tutor_subjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the tutor_subject to update in case it exists.
     */
    where: Prisma.tutor_subjectWhereUniqueInput;
    /**
     * In case the tutor_subject found by the `where` argument doesn't exist, create a new tutor_subject with this data.
     */
    create: Prisma.XOR<Prisma.tutor_subjectCreateInput, Prisma.tutor_subjectUncheckedCreateInput>;
    /**
     * In case the tutor_subject was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tutor_subjectUpdateInput, Prisma.tutor_subjectUncheckedUpdateInput>;
};
/**
 * tutor_subject delete
 */
export type tutor_subjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which tutor_subject to delete.
     */
    where: Prisma.tutor_subjectWhereUniqueInput;
};
/**
 * tutor_subject deleteMany
 */
export type tutor_subjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tutor_subjects to delete
     */
    where?: Prisma.tutor_subjectWhereInput;
    /**
     * Limit how many tutor_subjects to delete.
     */
    limit?: number;
};
/**
 * tutor_subject without action
 */
export type tutor_subjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=tutor_subject.d.ts.map